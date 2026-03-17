'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const https = require('https');
const { sendEmail } = require('./sendEmail');

const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
}));

// Validate that email is a plausible email address
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Contact-form submission endpoint
app.post('/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields: name, email, subject, message' });
  }

  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    await sendEmail({ name, email, phone, subject, message });
    return res.json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error('Error sending email:', err);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

// Health check
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Google Analytics 4 – first-party measurement proxy.
// Cloudflare measurement path: /ga4/mp/collect
// Forwards GA4 Measurement Protocol hits to Google Analytics so the request
// appears to come from your own domain, bypassing browser ad-blockers.
app.post('/ga4/mp/collect', (req, res) => {
  const qs = new URLSearchParams(req.query).toString();
  const gaUrl = `https://www.google-analytics.com/mp/collect${qs ? '?' + qs : ''}`;
  const body = JSON.stringify(req.body || {});

  const proxyReq = https.request(
    gaUrl,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    },
    (proxyRes) => {
      if (proxyRes.statusCode >= 400) {
        let raw = '';
        proxyRes.on('data', (chunk) => { raw += chunk; });
        proxyRes.on('end', () => {
          console.error(`GA4 proxy: upstream returned ${proxyRes.statusCode}`, raw);
          res.status(proxyRes.statusCode).end();
        });
      } else {
        res.status(proxyRes.statusCode).end();
      }
    },
  );

  proxyReq.on('error', (err) => {
    console.error('GA4 proxy: failed to reach google-analytics.com', err);
    res.status(502).end();
  });
  proxyReq.write(body);
  proxyReq.end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Email server listening on port ${PORT}`);
});

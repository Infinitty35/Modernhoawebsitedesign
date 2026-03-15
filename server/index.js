'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Email server listening on port ${PORT}`);
});

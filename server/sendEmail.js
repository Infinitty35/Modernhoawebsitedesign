'use strict';

require('dotenv').config();
const nodemailer = require('nodemailer');
const escapeHtml = require('escape-html');

// SMTP transporter configured for Outlook / Microsoft 365.
// Set EMAIL_USER and APPPASSWORD in the .env file (see .env.example).
const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.APPPASSWORD,
  },
});

/**
 * Send a contact-form submission to the HOA inbox.
 *
 * @param {Object} params
 * @param {string} params.name    - Submitter's full name
 * @param {string} params.email   - Submitter's email address
 * @param {string} [params.phone] - Submitter's phone number (optional)
 * @param {string} params.subject - Message subject
 * @param {string} params.message - Message body
 * @returns {Promise<Object>} nodemailer send-mail result
 */
async function sendEmail({ name, email, phone, subject, message }) {
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: phone ? escapeHtml(phone) : 'N/A',
    subject: escapeHtml(subject),
    message: escapeHtml(message),
  };

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'elandon@outlook.com',
    replyTo: email,
    subject: `Contact Form: ${safe.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${safe.name}</p>
      <p><strong>Email:</strong> ${safe.email}</p>
      <p><strong>Phone:</strong> ${safe.phone}</p>
      <p><strong>Subject:</strong> ${safe.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${safe.message}</p>
    `,
    text: `New Contact Form Submission\n\nName: ${safe.name}\nEmail: ${safe.email}\nPhone: ${safe.phone}\nSubject: ${safe.subject}\n\nMessage:\n${safe.message}`,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendEmail };

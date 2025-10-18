const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, company, industry, message } = req.body;

  console.log('Contact form submission:', { name, email, company, industry, message });

  // In production, this would send an email or store in database
  res.json({
    success: true,
    message: 'Thank you for your interest! We will contact you shortly.'
  });
});

// Demo request endpoint
app.post('/api/demo', (req, res) => {
  const { name, email, company, industry, phoneNumber } = req.body;

  console.log('Demo request:', { name, email, company, industry, phoneNumber });

  res.json({
    success: true,
    message: 'Demo request received! Our team will reach out within 24 hours.'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

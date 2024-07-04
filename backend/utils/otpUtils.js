const nodemailer = require('nodemailer');
const crypto = require('crypto');
const Otp = require('../models/otpModel');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.generateAndSendOtp = async (email) => {
  const otp = crypto.randomInt(100000, 999999).toString();
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`
  };

  try {
    await transporter.sendMail(mailOptions);

    const otpEntry = new Otp({ email, otp });
    await otpEntry.save();
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const express = require('express');
const router = express.Router();
const { registerUser, verifyOtp, resendOtp } = require('../controllers/authController');
const { validateBorrower, validateLender } = require('../middleware/validation');

router.post('/register/borrower', validateBorrower, registerUser);
router.post('/register/lender', validateLender, registerUser);
router.post('/verify-otp', verifyOtp);
router.post('/resend-otp', resendOtp);

module.exports = router;

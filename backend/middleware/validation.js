const { check, validationResult } = require('express-validator');

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Validation Middleware for Borrower
const validateBorrower = [
  check('firstName').notEmpty().withMessage('First Name is required'),
  check('lastName').notEmpty().withMessage('Last Name is required'),
  check('email').isEmail().withMessage('Email is required'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  check('phoneNumber').notEmpty().withMessage('Phone Number is required'),
  check('dateOfBirth').notEmpty().withMessage('Date of Birth is required'),
  check('streetAddress').notEmpty().withMessage('Street Address is required'),
  check('city').notEmpty().withMessage('City is required'),
  check('state').notEmpty().withMessage('State is required'),
  check('postalCode').notEmpty().withMessage('Postal/ZIP Code is required'),
  check('country').notEmpty().withMessage('Country is required'),
  check('govtIDNumber').notEmpty().withMessage('Government ID Number is required'),
  check('bankAccountDetails').notEmpty().withMessage('Bank Account Details are required'),
  check('creditScoreAuthorization').notEmpty().withMessage('Credit Score Authorization is required'),
  check('employmentStatus').notEmpty().withMessage('Employment Status is required'),
  check('annualIncome').notEmpty().withMessage('Annual Income is required'),
  handleValidationErrors
];

// Validation Middleware for Lender
const validateLender = [
  check('firstName').notEmpty().withMessage('First Name is required'),
  check('lastName').notEmpty().withMessage('Last Name is required'),
  check('email').isEmail().withMessage('Email is required'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  check('phoneNumber').notEmpty().withMessage('Phone Number is required'),
  check('dateOfBirth').notEmpty().withMessage('Date of Birth is required'),
  check('streetAddress').notEmpty().withMessage('Street Address is required'),
  check('city').notEmpty().withMessage('City is required'),
  check('state').notEmpty().withMessage('State is required'),
  check('postalCode').notEmpty().withMessage('Postal/ZIP Code is required'),
  check('country').notEmpty().withMessage('Country is required'),
  check('govtIDNumber').notEmpty().withMessage('Government ID Number is required'),
  check('companyName').notEmpty().withMessage('Company Name is required'),
  check('companyRegNumber').notEmpty().withMessage('Company Registration Number is required'),
  check('companyAddress').notEmpty().withMessage('Company Address is required'),
  check('companyContactInfo').notEmpty().withMessage('Company Contact Information is required'),
  check('investmentAmountRange').notEmpty().withMessage('Investment Amount Range is required'),
  check('preferredLoanTerms').notEmpty().withMessage('Preferred Loan Terms are required'),
  check('riskTolerance').notEmpty().withMessage('Risk Tolerance Level is required'),
  handleValidationErrors
];

module.exports = {
  validateBorrower,
  validateLender,
};

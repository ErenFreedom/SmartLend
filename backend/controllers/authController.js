const Borrower = require('../models/borrowerModel');
const Lender = require('../models/lenderModel');
const Otp = require('../models/otpModel');
const UnverifiedUser = require('../models/unverifiedUserModel');
const { generateAndSendOtp } = require('../utils/otpUtils');
const bcrypt = require('bcryptjs');

// Register User
exports.registerUser = async (req, res) => {
  const {
    firstName, lastName, email, password, phoneNumber, countryCode, dateOfBirth,
    streetAddress, city, state, postalCode, country, govtIDNumber, govtIDUpload, selfieWithID,
    userRole, loanAmountRequested, loanPurpose, desiredLoanTerm, employerName, jobTitle, employmentDuration,
    monthlyExpenses, outstandingDebts, assetsAndLiabilities, companyName, companyRegNumber, companyAddress,
    companyContactInfo, investmentAmountRange, preferredLoanTerms, riskTolerance, bankAccountDetails, creditScoreAuthorization, employmentStatus, annualIncome
  } = req.body;

  try {
    // Check if user already exists
    let user = await Borrower.findOne({ email });
    if (!user) {
      user = await Lender.findOne({ email });
    }
    if (!user) {
      user = await UnverifiedUser.findOne({ email });
    }
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new unverified user
    const newUser = new UnverifiedUser({
      firstName, lastName, email, password: hashedPassword, phoneNumber, countryCode, dateOfBirth,
      streetAddress, city, state, postalCode, country, govtIDNumber, govtIDUpload, selfieWithID,
      userRole, loanAmountRequested, loanPurpose, desiredLoanTerm, employerName, jobTitle, employmentDuration,
      monthlyExpenses, outstandingDebts, assetsAndLiabilities, companyName, companyRegNumber, companyAddress,
      companyContactInfo, investmentAmountRange, preferredLoanTerms, riskTolerance, bankAccountDetails, creditScoreAuthorization, employmentStatus, annualIncome
    });

    await newUser.save();

    // Generate and send OTP
    await generateAndSendOtp(email);

    res.status(200).json({ msg: 'User registered successfully, OTP sent to email' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Verify OTP
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    // Find OTP entry
    const otpEntry = await Otp.findOne({ email, otp });

    if (!otpEntry) {
      return res.status(400).json({ msg: 'Invalid OTP' });
    }

    // Find unverified user
    const unverifiedUser = await UnverifiedUser.findOne({ email });

    if (!unverifiedUser) {
      return res.status(400).json({ msg: 'Unverified user not found' });
    }

    // Move user to the appropriate collection
    let newUser;
    if (unverifiedUser.userRole === 'borrower') {
      newUser = new Borrower({
        firstName: unverifiedUser.firstName,
        lastName: unverifiedUser.lastName,
        email: unverifiedUser.email,
        password: unverifiedUser.password,
        phoneNumber: unverifiedUser.phoneNumber,
        countryCode: unverifiedUser.countryCode,
        dateOfBirth: unverifiedUser.dateOfBirth,
        streetAddress: unverifiedUser.streetAddress,
        city: unverifiedUser.city,
        state: unverifiedUser.state,
        postalCode: unverifiedUser.postalCode,
        country: unverifiedUser.country,
        govtIDNumber: unverifiedUser.govtIDNumber,
        govtIDUpload: unverifiedUser.govtIDUpload,
        selfieWithID: unverifiedUser.selfieWithID,
        loanAmountRequested: unverifiedUser.loanAmountRequested,
        loanPurpose: unverifiedUser.loanPurpose,
        desiredLoanTerm: unverifiedUser.desiredLoanTerm,
        employerName: unverifiedUser.employerName,
        jobTitle: unverifiedUser.jobTitle,
        employmentDuration: unverifiedUser.employmentDuration,
        monthlyExpenses: unverifiedUser.monthlyExpenses,
        outstandingDebts: unverifiedUser.outstandingDebts,
        assetsAndLiabilities: unverifiedUser.assetsAndLiabilities,
        bankAccountDetails: unverifiedUser.bankAccountDetails,
        creditScoreAuthorization: unverifiedUser.creditScoreAuthorization,
        employmentStatus: unverifiedUser.employmentStatus,
        annualIncome: unverifiedUser.annualIncome,
      });
    } else if (unverifiedUser.userRole === 'lender') {
      newUser = new Lender({
        firstName: unverifiedUser.firstName,
        lastName: unverifiedUser.lastName,
        email: unverifiedUser.email,
        password: unverifiedUser.password,
        phoneNumber: unverifiedUser.phoneNumber,
        countryCode: unverifiedUser.countryCode,
        dateOfBirth: unverifiedUser.dateOfBirth,
        streetAddress: unverifiedUser.streetAddress,
        city: unverifiedUser.city,
        state: unverifiedUser.state,
        postalCode: unverifiedUser.postalCode,
        country: unverifiedUser.country,
        govtIDNumber: unverifiedUser.govtIDNumber,
        govtIDUpload: unverifiedUser.govtIDUpload,
        selfieWithID: unverifiedUser.selfieWithID,
        companyName: unverifiedUser.companyName,
        companyRegNumber: unverifiedUser.companyRegNumber,
        companyAddress: unverifiedUser.companyAddress,
        companyContactInfo: unverifiedUser.companyContactInfo,
        investmentAmountRange: unverifiedUser.investmentAmountRange,
        preferredLoanTerms: unverifiedUser.preferredLoanTerms,
        riskTolerance: unverifiedUser.riskTolerance,
        bankAccountDetails: unverifiedUser.bankAccountDetails,
        creditScoreAuthorization: unverifiedUser.creditScoreAuthorization,
        employmentStatus: unverifiedUser.employmentStatus,
        annualIncome: unverifiedUser.annualIncome,
      });
    }

    await newUser.save();
    await UnverifiedUser.deleteOne({ email });

    // OTP is valid
    res.status(200).json({ msg: 'OTP verified successfully, user registered' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Resend OTP
exports.resendOtp = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if user exists in UnverifiedUser
    const user = await UnverifiedUser.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'User does not exist' });
    }

    // Generate and send OTP
    await generateAndSendOtp(email);

    res.status(200).json({ msg: 'OTP resent successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const mongoose = require('mongoose');

const UnverifiedUserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  countryCode: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  govtIDNumber: {
    type: String,
    required: true,
  },
  govtIDUpload: {
    type: String,
    required: true,
  },
  selfieWithID: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    required: true,
  },
  // Borrower-specific fields
  loanAmountRequested: String,
  loanPurpose: String,
  desiredLoanTerm: String,
  employerName: String,
  jobTitle: String,
  employmentDuration: String,
  monthlyExpenses: String,
  outstandingDebts: String,
  assetsAndLiabilities: String,
  bankAccountDetails: String,
  creditScoreAuthorization: String,
  employmentStatus: String,
  annualIncome: String,
  // Lender-specific fields
  companyName: String,
  companyRegNumber: String,
  companyAddress: String,
  companyContactInfo: String,
  investmentAmountRange: String,
  preferredLoanTerms: String,
  riskTolerance: String
});

module.exports = mongoose.model('UnverifiedUser', UnverifiedUserSchema);

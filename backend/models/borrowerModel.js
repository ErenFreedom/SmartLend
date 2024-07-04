const mongoose = require('mongoose');

const BorrowerSchema = new mongoose.Schema({
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
  bankAccountDetails: {
    type: String,
    required: true,
  },
  creditScoreAuthorization: {
    type: String,
    required: true,
  },
  employmentStatus: {
    type: String,
    required: true,
  },
  annualIncome: {
    type: String,
    required: true,
  },
  loanAmountRequested: {
    type: String,
    required: true,
  },
  loanPurpose: {
    type: String,
    required: true,
  },
  desiredLoanTerm: {
    type: String,
    required: true,
  },
  employerName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  employmentDuration: {
    type: String,
    required: true,
  },
  monthlyExpenses: {
    type: String,
    required: true,
  },
  outstandingDebts: {
    type: String,
    required: true,
  },
  assetsAndLiabilities: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Borrower', BorrowerSchema);

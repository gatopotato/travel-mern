// models/Form.js

const { number } = require('joi');
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  userName: String,
  email: String,
  phoneNumber: Number,
  numberOfGuests: Number,
  checkInDate: Date,
  checkOutDate: Date,
  branchName: String,
  roomName: String,
  
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;

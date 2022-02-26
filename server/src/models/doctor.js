const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  speciality: { type: String, required: true },
  experience: { type: Number, required: true },
  fees: { type: Number, required: true },
  role: { type: String, default: 'DR' },
  approved: { type: Boolean, default: false },
});

module.exports = mongoose.model('Doctor', doctorSchema);

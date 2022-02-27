const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  date: String,
  time: String,
  user: { type: String, ref: 'User' },
});

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
  appointments: {
    type: [appointmentSchema],
    default: [],
  },
});

module.exports = mongoose.model('Doctor', doctorSchema);

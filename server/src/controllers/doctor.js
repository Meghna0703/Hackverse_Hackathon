const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const diseaseList = require('./diseases.json');

const Doctor = require('./../models/doctor');
const errorHelper = require('./../utils/error');

exports.request = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(errorHelper('Validation Failed', 422, errors.array()));
  }
  const {
    name,
    email,
    fees,
    phone,
    experience,
    speciality,
    address,
    password,
  } = req.body;

  try {
    const extHosp = await Doctor.findOne({ email });

    if (extHosp) {
      return next(
        errorHelper('Doctor with this email already exists', 409, [])
      );
    }

    const hash = await bcrypt.hash(password, 12);

    await Doctor.create({
      name,
      email,
      phone,
      password: hash,
      address,
      speciality,
      experience,
      fees,
    });

    return res.status(201).json({
      message: 'Request sent successfully',
      status: 201,
    });
  } catch (error) {
    return next(errorHelper(error.message, 500, []));
  }
};

exports.getRequests = async (req, res, next) => {
  try {
    const doctors = await Doctor.find({ approved: false }).select(
      'name email phone address'
    );

    return res.status(200).json({
      message: 'Doctor Addition requests',
      doctors,
    });
  } catch (error) {
    return next(errorHelper(error.message, 500, []));
  }
};

exports.approveRequest = async (req, res, next) => {
  try {
    const doctor = await Doctor.findOne({ _id: req.body.id });
    if (!doctor) {
      return next(errorHelper('Doctor not found', 404, []));
    }
    doctor.approved = true;
    await doctor.save();
    return res.status(200).json({
      message: 'success',
    });
  } catch (error) {
    return next(errorHelper(error.message, 500, []));
  }
};

exports.disapproveRequest = async (req, res, next) => {
  try {
    const doctor = await Doctor.findOneAndDelete({ _id: req.body.id });
    if (!doctor) {
      return next(errorHelper('Hospital not found', 404, []));
    }
    return res.status(200).json({
      message: 'success',
    });
  } catch (error) {
    return next(errorHelper(error.message, 500, []));
  }
};

exports.getDoctors = async (req, res, next) => {
  const { disease } = req.params.disease;
  if (!disease) {
    const doctors = await Doctor.find({ approved: true }).select('-password');
    return res.json({
      doctors,
    });
  }
  try {
    const obj = diseaseList[disease];
    if (!obj) {
      return next('Disease not found', 404, []);
    }
    const spec = obj.specialist;
    const doctors = await Doctor.find({
      approved: true,
      speciality: spec,
    }).select('-password');
    return res.json({
      doctors,
    });
  } catch (error) {
    return next('Disease not found', 404, []);
  }
};

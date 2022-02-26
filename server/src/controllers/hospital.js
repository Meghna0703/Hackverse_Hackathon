const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const Hospital = require('./../models/hospital');
const errorHelper = require('./../utils/error');

exports.request = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(errorHelper('Validation Failed', 422, errors.array()));
  }
  const { name, email, phone, address, city, state, password } = req.body;

  try {
    const extHosp = await Hospital.findOne({ email });

    if (extHosp) {
      return next(
        errorHelper('Hospital with this email already exists', 409, [])
      );
    }

    const hash = await bcrypt.hash(password, 12);

    const hospital = await Hospital.create({
      name,
      email,
      phone,
      password: hash,
      address,
      city,
      state,
    });

    console.log(hospital);

    return res.status(201).json({
      message: 'Request sent successfully',
      status: 201,
    });
  } catch (error) {
    return next(errorHelper(error.message, 500, []));
  }
};

exports.resources = async (req, res, next) => {
  const { general, icu, oxy, ventilator } = req.body;
  if (general) {
    req.user.resources.general = general;
    await req.user.save();
  }
  if (icu) {
    req.user.resources.icu = icu;
    await req.user.save();
  }
  if (oxy) {
    req.user.resources.oxy = oxy;
    await req.user.save();
  }
  if (ventilator) {
    req.user.resources.ventilator = ventilator;
    await req.user.save();
  }
  return res.status(200).json({
    message: 'resources updated',
    newResources: req.user.resources,
  });
};

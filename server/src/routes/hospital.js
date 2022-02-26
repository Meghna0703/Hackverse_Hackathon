const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const { resources } = require('../controllers/hospital');
const { postSearchHospital } = require('../controllers/search');
const {
  request,
} = require('../controllers/hospital');

router.post(
  '/request',

  [
    body('name')
      .isLength({ min: 3 })
      .withMessage('Name should be at least 3 characters long'),
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email')
      .normalizeEmail()
      .toLowerCase(),
    body('phone')
      .isNumeric()
      .isLength({ min: 10, max: 10 })
      .withMessage('Please enter a valid phone number'),
    body('address')
      .isLength({ min: 10 })
      .withMessage('Please enter a valid address, at least 10 characters'),
    body('city')
      .isLength({ min: 3 })
      .withMessage('Please enter a valid city, at least 4 chars'),
    body('state')
      .isLength({ min: 3 })
      .withMessage('Please enter a valid city, at least 3 chars'),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be of at least 8 characters'),
    body('confPassword').custom((value, { req }) => {
      if (value != req.body.password) {
        throw new Error('Passwords do not match');
      } else {
        return true;
      }
    }),
  ],
  request
);

router.post('/resources', resources);

router.post('/search', postSearchHospital);

module.exports = router;

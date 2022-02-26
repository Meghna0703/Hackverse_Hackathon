const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

router.post(
  '/signup',
  [
    body('name')
      .isLength({ min: 3 })
      .withMessage('Name should be at least 3 characters long'),
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email')
      .normalizeEmail()
      .toLowerCase(),
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
    body('sex')
      .isNumeric()
      .custom((value) => {
        if (value == 0 || value == 1) {
          return true;
        } else {
          return false;
        }
      })
      .withMessage('Invalid Gender'),
  ],
  signupUser
);

module.exports = router;

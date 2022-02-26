const axios = require('axios').default;
const express = require('express');
const router = express.Router();

const errorHelper = require('./../utils/error');

router.post('/predict', (req, res, next) => {
  //const { q3, q5, q10, q13, q16, q17, q21, q24, q26, q31, q34, q37, q38, q42 } =
  //req.body;
  const answerState = req.body;
  console.log('hello', answerState);

  axios
    .post('http://localhost:8000/predict', {
      answerState,
    })
    .then((response) => {
      return res.status(200).json({
        message: 'Prediction Results',
        probabilityArray: response.data,
      });
    })
    .catch((e) => {
      return next(errorHelper(e.message, 500, []));
    });
});

router.post('/disease', (req, res, next) => {
  //const { q3, q5, q10, q13, q16, q17, q21, q24, q26, q31, q34, q37, q38, q42 } =
  //req.body;
  const answerState = req.body;
  console.log('hello', answerState);

  axios
    .post('http://localhost:8000/disease', {
      answerState,
    })
    .then((response) => {
      return res.status(200).json({
        message: 'Prediction Results',
        probabilityArray: response.data,
      });
    })
    .catch((e) => {
      return next(errorHelper(e.message, 500, []));
    });
});

module.exports = router;

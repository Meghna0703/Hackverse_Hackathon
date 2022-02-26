const express = require('express');
const router = express.Router();

const hospRoutes = require('./routes/hospital');

router.use('/hospitals', hospRoutes);

module.exports = router;

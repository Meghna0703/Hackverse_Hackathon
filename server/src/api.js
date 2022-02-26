const express = require('express');
const router = express.Router();

const hospRoutes = require('./routes/hospital');
const machRoutes = require('./routes/ml');

router.use('/hospitals', hospRoutes);

router.use('/ml', machRoutes);

module.exports = router;

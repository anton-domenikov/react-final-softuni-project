const router = require('express').Router();

// controllers
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const motorcycleController = require('./controllers/motorcycleController');


// use controllers
router.use('/auth', authController);
router.use('/motorcycle', motorcycleController);



module.exports = router;
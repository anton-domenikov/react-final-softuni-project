const router = require('express').Router();

// controllers
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const expenseController = require('./controllers/expenseController');


// use controllers
router.use('/', homeController);
router.use('/auth', authController);
router.use('/expense', expenseController);



module.exports = router;
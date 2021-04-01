const router = require('express').Router();
const isAuth = require('../middlewares/isAuth');
const motorcycleService = require('../services/motorcycleService');

router.get('/', (req, res, next) => {

    motorcycleService.getAll()
        .then(motorcycles => {
            return motorcycles
            // res.render('home', { motorcycles });
        })
        .catch(next);

});

router.get('/profile', isAuth, (req, res, next) => {
    motorcycleService.getUser(req.user._id)
        .then(user => {

            let amountOfmotorcycles = 0;
            let totalMerchants = user.motorcycles.length;
            user.motorcycles.forEach((motorcycle) => {
                amountOfmotorcycles += Number(motorcycle.total);
            });

            let amountLeftOfUser = user.amount - amountOfmotorcycles;

            res.render('profile', { username: user.username, amountOfmotorcycles, totalMerchants, amountLeftOfUser });
        })
        .catch(next)
});

module.exports = router;
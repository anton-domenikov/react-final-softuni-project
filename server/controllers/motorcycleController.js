const router = require('express').Router();
const motorcycleService = require('../services/motorcycleService');
const { body, validationResult } = require('express-validator');



router.get('/', (req, res, next) => {

    motorcycleService.getAll()
        .then(motorcycles => {
            return res.send(motorcycles);
        })
        .catch(next);

});

router.get('/create', (req, res) => {
    res.render('createMotorcycle');
});

router.post('/create', (req, res, next) => {
    let motorcycleData = extractMotorcycleData(req);
    console.log(req);

    // validation start
    // if (motorcycleData.merchant.length < 4) {
    //     res.render('createMotorcycle', { error: { message: 'Merchant should be at least 4 characters long!' }});
    //     return;
    // }

    // if (Number(motorcycleData.total) < 0) {
    //     res.render('createMotorcycle', { error: { message: 'Total should be a positive number!' }});
    //     return;
    // }

    // if (motorcycleData.description.length < 3 || 30 < motorcycleData.description.length) {
    //     res.render('createMotorcycle', { error: { message: 'Descriptions should be between 3 and 30 characters long!' }});
    //     return;
    // }

    // if (motorcycleData.category == undefined) {
    //     res.render('createMotorcycle', { error: { message: 'You have to select a category!' }});
    //     return;
    // }

    // if (!allowedCategories.includes(motorcycleData.category)) {
    //     res.render('createMotorcycle', { error: { message: 'You have to select a category from the allowed ones!' }});
    //     return;
    // }
    // validation end

    motorcycleService.create(motorcycleData)
        .then(createdMotorcycle => {
            res.redirect('/');
        })
        .catch(next)

});


router.get('/report/:motorcycleId', (req, res, next) => {
    motorcycleService.getOne(req.params.motorcycleId)
        .then(motorcycle => {
            res.render('report', motorcycle);
        })
        .catch(next);
});

router.get('/delete/:motorcycleId', (req, res, next) => {
    motorcycleService.deleteOne(req.params.motorcycleId)
        .then(() => res.redirect('/'))
        .catch(next);
});

function extractMotorcycleData(req) {
    let { model, year, displacement, imageURL } = req.body;

    let motorcycleData = {
        model,
        year,
        displacement,
        imageURL,
    };

    return motorcycleData;
}

module.exports = router;
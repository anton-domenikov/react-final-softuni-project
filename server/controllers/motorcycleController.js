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

// router.get('/my-bikes', (req, res, next) => {
//     let username = req.body.user;

//     motorcycleService.getMyBikes(username)
//         .then(motorcycles => {
//             return res.send(motorcycles);
//         })
//         .catch(next);

// });


router.post('/create', (req, res, next) => {
    // console.log(req.body);
    let motorcycleData = extractMotorcycleData(req);

    let username = req.body.user;



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

    motorcycleService.create(motorcycleData, username)
        .then(createdMotorcycle => {
            res.send(createdMotorcycle)
        })
        .catch(next)

});


router.get('/edit/:motorcycleId', (req, res, next) => {
    motorcycleService.getOne(req.params.motorcycleId)
        .then(motorcycle => {
            res.send(motorcycle);
        })
        .catch(next);
});

router.get('/delete/:motorcycleId', (req, res, next) => {
    motorcycleService.deleteOne(req.params.motorcycleId)
        .then(() => res.redirect('/'))
        .catch(next);
});

function extractMotorcycleData(req) {
    let { model, year, displacement, imageURL } = req.body.motorcycle;

    let motorcycleData = {
        model,
        year,
        displacement,
        imageURL,
    };

    return motorcycleData;
}

module.exports = router;
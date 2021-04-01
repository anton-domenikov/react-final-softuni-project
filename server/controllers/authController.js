const router = require('express').Router();
const authService = require('../services/authService');
const { COOKIE_NAME } = require('../config/config');
const { body, validationResult } = require('express-validator');


// login with USERNAME
router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        let token = await authService.login(username, password);
        res.cookie(COOKIE_NAME, token, { httpOnly: true });
        return res.json({token: token, message: 'you have logged in successfully'});
        res.redirect('/');
    } catch (error) {
        res.render('login', {error});
    }

});


router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register',
    // body('username', 'Username cannot be empty').notEmpty(),
    // body('username', 'Username should be at least 4 characters').isLength({min: 4}),
    // body('password', 'Password should be at least 4 characters').isLength({min: 4}),
    (req, res) => {
        console.log(req.body);
        const {username, password, rePassword} = req.body;


        // validations start
        // let errors = validationResult(req).array();
        // if (errors.length > 0) {
        //     let error = errors[0];
        //     error.message = error.msg;
        //     return res.render('register', {error});
        // }

        // if (amount < 0) {
        //     res.render('register', {error: { message: "Amount cannot be a negative number!" }});
        //     return;
        // }

        if (password !== rePassword) {
            res.render('register', {error: { message: "Passwords don't match!" }});
            return;
        }
        // validations end
        

        authService.register(username, password)
            .then(data => {
                console.log(data);
                res.json(data)
            })
            .catch(error => {
                console.log(error);
                res.send(error)
            });
    }
);

router.get('/logout', (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/');
})

module.exports = router;
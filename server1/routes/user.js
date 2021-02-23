const router = require('express').Router();
const userModel = require('../schemas/user');
const forgotPasswordMail = require('./email');


router.get('/find', async (req, res) => {
    try {
        const users = await userModel.find({})
        res.send(users);
    } catch (err) {
        console.log(err)
        res.status(500).send('=======error')
    }

})

router.post('/login', async (req, res) => {
    try {
        const user = await userModel.findOne({ name: req.body.name, password: req.body.password });
        if (user)
            res.send(user);
        res.status(500).send('user not found')
    } catch (err) {
        console.log(err)
        res.status(500).send('error')
    }
})

router.get('/forgotPassword/:email', async (req, res) => {
    try {
        const user = await
            userModel.findOne({ email: req.params.email });
        if (user) {
            res.status(200).send({ email: 'sent email' })
            user.password = generatePassword();
            await user.save();
            await forgotPasswordMail(user);
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('error')
    }
})

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

router.post('/', async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        res.status(200).send(user)
    } catch (err) {
        res.status(500).send({ err });
    }
})

module.exports = router;
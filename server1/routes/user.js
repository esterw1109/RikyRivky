const router = require('express').Router();
const userModel = require('../schemas/user');


router.get('/find', async (req, res) => {
    try {
        const users = await userModel.find({})
        res.send(users);
    } catch(err) {
        console.log(err)
        res.status(500).send('=======error')
    }

})

router.post('/login', async (req, res) => {
    try {
        const user = await userModel.findOne({name: req.body.name, password: req.body.password});
        if(user)
        res.send(user);
        res.status(500).send('user not found')
    } catch(err) {
        console.log(err)
        res.status(500).send('error')
    }
})

router.post('/', async(req, res) => {
    try {
        const user = await userModel.create(req.body);
        res.status(200).send({user})
    } catch(err) {
        res.status(500).send({ err });
    }
})

module.exports = router;
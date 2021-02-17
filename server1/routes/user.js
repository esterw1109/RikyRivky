const router = require('express').Router();
const userModel = require('../schemas/user');


router.get('/find', async (req, res) => {
    try {
        const users = await userModel.find({name: 'abc'})
        console.log('hello', users);
        res.send({msg:'hello'});
    } catch(err) {
        console.log(err)
        res.status(500).send('=======error')
    }

})

router.get('/findUser/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const users = await userModel.find({name: 'abc'})
        console.log('hello', users);
        res.send({msg:'hello'});
    } catch(err) {
        console.log(err)
        res.status(500).send('=======error')
    }

})

router.post('/', async(req, res) => {
    try {
        const user = await userModel.create({ name: 'a', password: 'bkfjdsl'});
        res.status(200).send({user})
    } catch(err) {
        res.status(500).send({ err });
    }
})

module.exports = router;
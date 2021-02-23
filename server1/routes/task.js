const router = require('express').Router();
const userModel = require('../schemas/user');


router.get('/user/:id/find', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        res.send({ tasks: user.tasks });
    } catch (err) {
        console.log(err)
        res.status(500).send('error')
    }

})

router.get('/user/:id/find/:taskId', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        res.send(user.tasks.find(t => t.id === req.params.taskId));
    } catch (err) {
        console.log(err)
        res.status(500).send('error')
    }
})

router.post('/task', async (req, res) => {
    try {
        const task = await userModel.findOne({ name: req.body.name, password: req.body.password });
        if (task)
            res.send(task);
        res.status(500).send('task not found')
    } catch (err) {
        console.log(err)
        res.status(500).send('error')
    }
})

router.post('/user/:id', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user.tasks) {
            user.tasks = []
        }
        user.tasks.push(req.body);
        await user.save();
        res.status(200).send(user)
    } catch (err) {
        res.status(500).send({ err });
    }
})

router.post('/user/:id/update/:taskId', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user.tasks) {
            user.tasks = []
        }
        user.tasks = user.tasks.map(t => t.id === req.params.taskId ? { ...req.body, _id: req.params.id } : t);
        await user.save();
        res.status(200).send(user)
    } catch (err) {
        res.status(500).send({ err });
    }
})

router.get('/user/:id/remove/:taskId', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        const { tasks = [] } = user;
        user.tasks = tasks.filter(t => t.id !== req.params.taskId);
        await user.save();
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send({ err });
    }
})

// var fs = require('fs');
// router.get('/music', async(req, res) => {
//     fs.readFile(__dirname + '/music/test.mp3', function (err,data) {
//       if (err) {
//         res.writeHead(404);
//         res.end(JSON.stringify(err));
//         return;
//       }
//       res.writeHead(200);
//       res.end(data);
//     });
// })

module.exports = router;
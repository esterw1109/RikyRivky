let http=require('http')
const  cors = require('cors')
const mongoose = require('mongoose');
let express=require ('express')
const userRouter = require('./routes/user');
const bodyParser= require('body-parser');
const { json } = require('express');

 mongoose.connect('mongodb://localhost:27017/appMap', {useNewUrlParser: true});
 const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('asecfhvjk.l')
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.get('/user', (req, res) => {
//     console.log('hello');
//     res.send({msg:'hello'});
// })

app.use('/user', userRouter);

app.listen(3000);
// http.createServer(function(req,res){
// console.log('this is work');
// res.write('hhhhhhh');
// res.end();
// }).listen(3000)
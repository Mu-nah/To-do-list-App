const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const todoRouter = require('./route/routes.js');


const dbURI='mongodb+srv://Munah:Muna08102@nodetest.57edd.mongodb.net/todoList?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(app.listen(5000,()=>{
  console.log('connected to db') })) 
.catch((err) => console.log(err));


app.use(express.static('views'));
app.use(bodyParser.json()); 
app.use(todoRouter);
 
app.get('/', (req, res)=>{
  res.send('index', {title:'Home'});
})



/*app.listen(5000, ()=>{
  console.log('listening on port 5000')
})*/
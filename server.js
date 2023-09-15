const express = require('express')
const config = require('./config')
const app = express()
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('connect-flash');
require('app-module-path').addPath(__dirname)
require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/loginProject');

global.config = require('./config')
app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded({extended:false}))

app.set('view engine' , 'ejs')
app.use(methodOverride('method')) 
app.use(cookieParser('rezdfghbnjk'))
app.use(session({
    secret: 'hngfdbb',
    resave: true,
    saveUninitialized: true
  }))
app.use(flash());

app.get('/',(req,res)=>{
    res.render('index')
})


//app.use('/user',require('./routs/user'))
app.use('/',require('./routs/index'))

app.listen(config.port,(req,res)=>{
    console.log('server is running on port 3000') 
})
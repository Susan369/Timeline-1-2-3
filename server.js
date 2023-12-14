const express = require('express')
const app= express()
const router = require('./config/routes')
const mongoose = require('mongoose');
require('./models/commentModel');  // Import your comment model
require('./models/postModel');     // Import your post model

const port = process.env.PORT || 3000;
require('./config/mongoose')
require('dotenv').config()
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)
app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})
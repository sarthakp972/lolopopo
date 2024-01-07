var express = require('express');
var router = express.Router();

let userModel = require("./users");
const postModel =require("./posts");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

 
router.get('/createuser',async function(req,res){
  let createduser=await userModel.create({

    username:"sarthak",
 
password:"sarthak972", 
posts:[],

email:'sarthakpatwa@gmail.com' ,
fullname:'sarthak patwa',
  });
  res.send(createduser);
});

module.exports = router;

// const express = require('express');
import express from "express";
const app = express();
// const path = require('path');
import path from "path"
const router = express.Router();
// const exphbs = require("express-handlebars")
import { engine } from "express-handlebars";

// const mongoose=require('mongoose'); //mongoose connection//
import mongoose from "mongoose"
// const { type } = require('express/lib/response');

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname + '/public'));
//payment page//
app.get("/payment",(req,res)=>{
  res.sendFile("./payment/index.html")
})


app.use(express.urlencoded({extended : true}))

app.engine("handlebars" , engine());
app.set("view engine" , "handlebars");

//all 12 restaurants connections for router//
router.get('/',function(req,res){
  res.render('./registration');
  //__dirname : It will resolve to your project folder.
});

router.get('/bigbites',function(req,res){
  res.render('./bigbites');
  
});

router.get('/bigbitesonline',function(req,res){
  res.render('./bigbitesonline');
  
});
router.get('/keral',function(req,res){
  res.render('./keral');
  //__dirname : It will resolve to your project folder.
});
router.get('/keralonline',function(req,res){
  res.render('./keralonline');
  //__dirname : It will resolve to your project folder.
});

router.get('/biryani',function(req,res){
  res.render('./biryani.html');
  //__dirname : It will resolve to your project folder.
});


router.get('/biryanionline',function(req,res){
  res.render('./biryanionline');
  //__dirname : It will resolve to your project folder.
});


router.get('/cane',function(req,res){
  res.render('./cane');
  //__dirname : It will resolve to your project folder.
});
router.get('/caneonline',function(req,res){
  res.render('./caneonline');
  //__dirname : It will resolve to your project folder.
});
router.get('/empire',function(req,res){
  res.render('./empire');
  //__dirname : It will resolve to your project folder.
});
router.get('/empireonline',function(req,res){
  res.render('./empireonline');
  //__dirname : It will resolve to your project folder.
});
router.get('/grand',function(req,res){
  res.render('./grand');
  //__dirname : It will resolve to your project folder.
});

router.get('/grandonline',function(req,res){
  res.render('./grandonline');
  //__dirname : It will resolve to your project folder.
});
router.get('/taaza',function(req,res){
  res.render('./taaza');
  //__dirname : It will resolve to your project folder.
});

router.get('/taazaonline',function(req,res){
  res.render('./taazaonline');
  //__dirname : It will resolve to your project folder.
});
router.get('/green',function(req,res){
  res.render('./green');
  //__dirname : It will resolve to your project folder.
});
router.get('/greenonline',function(req,res){
  res.render('./greenonline');
  //__dirname : It will resolve to your project folder.
});
router.get('/krazy',function(req,res){
  res.render('./krazy');
  //__dirname : It will resolve to your project folder.
});
router.get('/krazyonline',function(req,res){
  res.render('./krazyonline');
  //__dirname : It will resolve to your project folder.
});
router.get('/icecream',function(req,res){
  res.render('./icecream');
  //__dirname : It will resolve to your project folder.
});
router.get('/iceonline',function(req,res){
  res.render('./iceonline');
  //__dirname : It will resolve to your project folder.
});
router.get('/sandwich',function(req,res){
  res.render('./sandwich');
  //__dirname : It will resolve to your project folder.
});
router.get('/sandwichonline',function(req,res){
  res.render('./sandwichonline');
  //__dirname : It will resolve to your project folder.
});
router.get('/pasta',function(req,res){
  res.render('./pasta');
  //__dirname : It will resolve to your project folder.
});
router.get('/pastaonline',function(req,res){
  res.render('./pastaonline');
  //__dirname : It will resolve to your project folder.
});
router.get('/grand',function(req,res){
  res.render('./grand');
  //__dirname : It will resolve to your project folder.
});
router.get('/grandonline',function(req,res){
  res.render('./grandonline');
  //__dirname : It will resolve to your project folder.
});

router.get('/aboutus',function(req,res){
  res.render(path.join(__dirname+'/aboutus.html'));
});
router.get('/',function(req,res){
  res.render('./faq');
});
router.get('/login',function(req,res){
  res.render('./login');
});
router.get('/home',function(req,res){
  res.render('./homepage');
});

router.get('/sitemap',function(req,res){
  res.render(path.join(__dirname+'/sitemap.html'));
});

router.get('/trial' , (req , res) => {
  res.render('./trial')
})
//all 12 restaurants node js router connections//

//mongo db connection code//
const local_mongodb_url="mongodb://localhost:27017/food"
mongoose.connect(local_mongodb_url,err=>{
  if(err)
{
  console.log(err);
}
else{
  console.log("database connected successfully");
}});

//schema for mongoose//
const Schema=mongoose.Schema;
//schema for login page starts here//
const postschema=new Schema
({
FreshFredID:
  {
    type:String,
    required:true
  },
  psw:
  {
    type:String,
    required:true
  }
}
)
const login = mongoose.model("login",postschema);

//routing post code starts here//
router.post("/login",function(req,res){
  console.log(req.body)
  // res.send("okay")
  res.redirect("/home")

  // save data in the database
  let newpost = req.body;

 let { FreshFredID , psw } = newpost;

 new login(newpost).save();
});
//routing post code ends here//

//login code ends here//



//routing post code registration  starts here//
router.post("/registration",function(req,res){
  console.log(req.body)
  // res.send("okay")
  res.redirect("/login")

  // save data in the database
  let reg = req.body;

 let { FreshFredID , name,email,psw } = reg;

 new registration(reg).save();
});
//routing post code ends here//

// registration code starts here//
const postschemareg=new Schema
({
FreshFredID:
  {
    type:String,
    required:true
  },
  name:
  {
    type:String,
    required:true
  },
  email:
  {
    type:String,
    required:true
  },
  psw:
  {
    type:String,
    required:true
  },
}
);

const registration = mongoose.model("registration",postschemareg);

//registration code ends here//

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');

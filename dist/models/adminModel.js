"use strict";var mongoose=require("mongoose"),schema=new mongoose.Schema({name:String,price:String,keyword:String,content:String,filepath:String,createTime:String}),model=mongoose.model("adminModel",schema);
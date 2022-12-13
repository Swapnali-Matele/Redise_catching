//const express = require('express');
import express from 'express';
//const fetch = require('node-fetch');
import fetch from 'node-fetch';
//const path = require('path');


//const redis = require("redis")
import redis from 'redis'
const app = express();
const PORT = process.env. PORT || 3000
const dotenv = require('dotenv')
const REDIS_PORT = process.env.PORT || 6379

const client = redis.createClient(REDIS_PORT)

//make a request to gitHub  for daata
const getRpose = async (req, res, next) => {
    try{
        console.log("Fetching data ...")
         const {username} = req.body

         const response = await fetch(`https://api.github.com/users/${username}`)

         const data = await response.json()
          
         res.send(data)
    } catch(err) {
        console.log(err)
        res.send(500)
}
}


app.get('/repos/:username',getRpose)


app.listen(3000, ()=>{
    console.log("server listen on port 3000")
})
 
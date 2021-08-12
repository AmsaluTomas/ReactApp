const express = require('express');
// const { Schema } = require('mongoose');
const router = express.Router();

//for mongo
const Schemas = require('../models/Schemas.js');


router.get('/tweets', (req, res) => {
    const str = [
        {
            "name": "Amsalu Kai",
            "msg": "This is my first tweet!",
            "username": "akai",
            "pic": "../public/images/im1.jpg"
        },
        {
            "name": "Daniel Bart",
            "msg": "React JS is so simple!",
            "username": "dbart",
            "pic": "../public/images/im2.jpg"
        },
        {
            "name": "John Smith",
            "msg": "Sweep the leg!",
            "username": "john",
            "pic": "../public/images/im3.jpg"
        }
    ];
    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

router.get('/addUser', async(req,res) =>{
    // readData
    const user = {username:'ella', fullname:'Ella amy'};
    const newUser = new Schemas.userDef(user);
    try{
        await newUser.save( async(err, newUserResult) =>{
            console.log('New User added to DB!');
            res.end('New User added to DB!');
        });
    }
    catch{
        console.log(err);
        res.end('New User Adding Failed!!');
    }
});

module.exports = router;
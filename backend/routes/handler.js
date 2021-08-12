const express = require('express');
const router = express.Router();

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

module.exports = router;
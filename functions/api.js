const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        'path': 'Home',
        'firstname': 'darren',
        'lastname': 'soohoo'
    })
});

router.get('/json', (req, res) => {
    res.json({
        'path': 'json',
        'author': 'darren soohoo'
    });
});


//app.use('/.netlify/functions/api', router);
app.use('/', router);

module.exports.handler = serverless(app)
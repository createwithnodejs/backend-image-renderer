// web.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const renderer = require('./renderer');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile( path.join(__dirname, 'index.html') );
});

app.post('/render', async (req, res) => {
    let text = req.body.text;

    let image = await renderer.render(text);
    return res.json({
        text: text,
        image: image
    });
});

app.listen(3000, () => {
    console.log("Listening for requests...");
});
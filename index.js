// index.js

const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const canvas = createCanvas(300, 200);
const ctx = canvas.getContext('2d');

let text = 'This image is created with Node.js!';

ctx.font = "18px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

ctx.fillStyle = "#ffffff";
ctx.fillRect(0,0,canvas.width, canvas.height);

ctx.fillStyle = "#000000";
ctx.fillText(text, canvas.width / 2, canvas.height / 2);

let imgDataURL = canvas.toDataURL();
let imgData = imgDataURL.replace(/^data:image\/\w+;base64,/, "");
let imgBuffer = new Buffer(imgData, 'base64');
fs.writeFileSync('first-image-from-nodejs.png', imgBuffer );

process.exit(1);
// renderer.js

const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

function renderImage(text) {
    const canvas = createCanvas(300, 200);
    const ctx = canvas.getContext('2d');

    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,canvas.width, canvas.height);

    ctx.fillStyle = "#000000";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    
    return new Promise((resolve, reject) => {
        canvas.toDataURL((err, image) => {
            if(err) {
                reject(err);
            }else{
                resolve(image);
            }
        });
    });
}

module.exports = {
    render: renderImage
}
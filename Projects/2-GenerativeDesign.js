
"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";



Color();

Grid();

function Grid() {
    context.strokeStyle = "black";
    context.lineWidth = 5;
    for (let i = 0; i < 30; i+= 1) {
        context.beginPath();
        let RX = Utils.randomNumber(2, 20)
        for (let j = 0; j < window.outerHeight; j+= RX) {
            
            let y = Noise.perlinNoise(j / 100) * 200 - 200;
                context.lineTo(y + i * 100, j);
                context.stroke();
                //Instead of making a new lines I used rectangles as line
                //to try and make a illusion that the horizantal...
                context.fillStyle = "black"
                context.fillRect(y + i * 100, j, 200, 5)
            
        }
    }
}

function Color() {
    let RX = Utils.randomNumber(2, 10)

        for (let i = 0; i < 20; i+= 1) {
        context.fillStyle = Utils.hsl(200, 1  * RX * i , 50);
        context.fillRect(0, 0 + 50 * i, window.outerWidth, 100)
        }
}
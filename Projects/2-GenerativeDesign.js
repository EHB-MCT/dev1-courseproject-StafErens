
"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";
//Noise scripts and other scripts from Solutions https://github.com/EHB-MCT/DEV1_Solutions_24.git


ColorBackground());
Grid();

function Grid() {
    context.strokeStyle = "black";
    context.lineWidth = 5;

    for (let i = 0; i < 30; i+= 1) {
        context.beginPath();
        let RX = Utils.randomNumber(5, 30)

        for (let j = 0; j < window.outerHeight; j+= 50) {
            let RX = Utils.randomNumber(1, 100)
            let y = Noise.perlinNoise(j / 100) * 200 - 200;
                context.lineTo(y + i * 100, j);
                context.stroke();
                //Instead of making a new lines I used rectangles as lines
                context.fillStyle = "black";
                context.fillRect(y + i * 100, j, 200, 5) 
        }
    }
}

function ColorBackground() {
    let RX = Utils.randomNumber(2, 10)

        for (let i = 0; i < 25; i+= 1) {
            context.fillStyle = Utils.hsl(200, 1  + RX * i , 50);
            context.fillRect(0, 0 + 50 * i, window.outerWidth, 100)
        }
}


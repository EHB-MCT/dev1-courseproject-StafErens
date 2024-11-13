
"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

Noisedraw();

function Noisedraw() {
    for (let i = 0; i < 30; i+= 1) {
        context.beginPath();
        for (let j = 0; j < 1000; j++) {
            
            let y = Noise.perlinNoise(j / 100) * 200 - 200;
                context.lineTo(y + i * 100, j, );
                context.stroke(); 
        }
    }
}
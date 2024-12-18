
"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";
//Noise scripts and other scripts from Solutions https://github.com/EHB-MCT/DEV1_Solutions_24.git

//animation
let play = true
//position signature
let Ysig = window.innerHeight;
let Xsig = window.innerWidth;
//color random start
let RX = Utils.randomNumber(2, 1000)
//Perlin noise intensitie 
let PeI = 100



window.onmousemove = move;

/**
 * 
 * @param {MouseEvent} eventData 
 */

Animation()


function Grid() {
    context.strokeStyle = "black";
    context.lineWidth = 5;

    for (let i = 0; i < window.outerWidth / 90; i+= 1) {
        context.beginPath();

        for (let j = 0; j < window.outerHeight + 100 ; j+= 50) {
            //Used spacing and stroke line to get a more pointy look for the noise
            let y = Noise.perlinNoise(j / PeI ) * 200 + - 200 ;
                context.lineTo(y + i * 100, j);
                context.stroke();
                //Instead of making a new lines I used rectangles as lines
                context.fillStyle = "black";
                context.fillRect(y + i * 100, j, 100, 5) 
        }
    }
}



function ColorBackground() {
    

        for (let i = 0; i < 25; i+= 1) {
            context.fillStyle = Utils.hsl(200, 1  + RX * i , 50);
            context.fillRect(0, 0 + 50 * i, window.outerWidth, 100) 
        }    
}

function move(eventData) {
    let x = eventData.pageY;
    let y = eventData.pageX;
    console.log (x)
    console.log (y)
    PeI = y/ 0.5
    RX = x/100
    console.log (RX)
}

function Animation() {
 if (play) {
    ColorBackground()
    Grid()
    Signature()
    requestAnimationFrame(Animation)

 }
}


// copied from milestone 1 and adjusted to make it easily moveable to anywhere
function Signature() {
    context.fillStyle = "#000000";
    context.fillRect(Xsig - 300, Ysig - 300, 300, 300);

    context.fillStyle = "#9364D5";
    context.fillRect(Xsig - 175,Ysig - 225, 50, 150);
    context.fillRect(Xsig - 125, Ysig - 75, 50, 50);
    context.fillRect(Xsig - 225, Ysig - 75, 50, 50);
    context.fillRect(Xsig - 125, Ysig - 275, 50, 100);
    context.fillRect(Xsig - 225, Ysig - 275, 50, 100);
    context.fillRect(Xsig - 75, Ysig - 275, 50, 50);
    context.fillRect(Xsig - 275, Ysig - 275, 50, 50);
}


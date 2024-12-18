
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
let CY = 1
let rand = Utils.randomNumber(2, 100)
//Perlin noise intensitie 
let PeI = 100
// square head start position 
let XH = 10
let YH = 10
let sizeH = 10

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
            let y = Noise.perlinNoise(j / PeI * rand) * 200 + - 200 ;
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
            context.fillStyle = Utils.hsl(20 * rand, 1  + CY * i , 50);
            context.fillRect(0, 0 + 50 * i, window.outerWidth, 100) 
        }    
}

//mouse position calc
function move(eventData) {
    let x = eventData.pageY;
    let y = eventData.pageX;
    PeI = y/ 0.05 //grid wave effect
    CY = x/100 // color cycle
}

function Animation() {
 if (play) {
    ColorBackground()
    Grid()
    rand+= 0.04

    Signature()
    squarehead(XH, YH, sizeH)
    
    if (sizeH > 200) {
        //squarehead random position after reset at size 200
        XH = Utils.randomNumber(50, Xsig-50)
        YH = Utils.randomNumber(50, Ysig-50)
        sizeH = 10
    }
        else {
        sizeH++
        }
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

function squarehead(x,y,size){
context.fillStyle = Utils.hsl(XH, YH, 50);
context.fillRect(x, y, size , size)
context.fillStyle = "white";
context.fillRect(x , y + size / 1.5, size / 1.2, size/6)
context.fillRect(x , y + size/3, size / 6, size / 6)
context.fillRect(x + size/2, y + size/3, size / 6, size / 6)


}
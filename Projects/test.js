
"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

import * as Utils from "../../scripts/utils.js";

window.onmousemove = move;

/**
 * 
 * @param {MouseEvent} eventData 
 */

function move(eventData) {
    let x = eventData.pageY;
    let y = eventData.pageX;
    console.log (x)
    console.log (y)
}

console.log (x)
console.log (y)

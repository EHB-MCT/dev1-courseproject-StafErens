let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

Signature();

function Signature() {
    context.fillStyle = "#000000";
    context.fillRect(50, 50, 300, 300);

    context.fillStyle = "#9364D5";
    context.fillRect(175, 125, 50, 150);
    context.fillRect(125, 275, 50, 50);
    context.fillRect(225, 275, 50, 50);
    context.fillRect(125, 75, 50, 100);
    context.fillRect(225, 75, 50, 100);
    context.fillRect(75, 75, 50, 50);
    context.fillRect(275, 75, 50, 50);
}

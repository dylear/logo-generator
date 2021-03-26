var canvas = document.getElementById("Canvas");
var context = canvas.getContext("2d");
context.fillStyle = "#AAA";
context.fillRect(0, 0, 400, 400);

//Math.floor function used to generate random number and used to draw a specific shape from the array//

var randomShape = Math.floor((Math.random() * 3) + 1);

if (randomShape == 1) {
    context.beginPath();
    context.rect(25, 50, 200, 100);
    context.fillStyle = '#00FF00';
    context.fill();
    context.lineWidth = 7;
    context.strokeStyle = '#000';
    context.stroke();
} else if (randomShape == 2) {
    context.beginPath();
    context.arc(200, 200, 69, 0, 2 * Math.PI, false);
    context.fillStyle = '#FF0000';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#000';
    context.stroke();
} else if (randomShape == 3) {
    context.beginPath();
    context.arc(276, 255, 70, 0, Math.PI, false);
    context.closePath();
    context.lineWidth = 5;
    context.fillStyle = '#0000FF';
    context.fill();
    context.strokeStyle = '#000';
    context.stroke();
}
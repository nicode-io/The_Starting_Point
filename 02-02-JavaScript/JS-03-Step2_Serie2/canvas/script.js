// Red Square
let canvas = document.querySelector('#square');
let context = canvas.getContext('2d');
context.fillStyle = '#f00';
context.fillRect(0,0,100,100);

// Blue circle
canvas = document.querySelector('#square');
context = canvas.getContext('2d');
context.beginPath();
context.arc(50, 50, 50, 0, 2*Math.PI, true);
context.fillStyle = "#00f";
context.fill();

canvas = document.querySelector('#test');
c = canvas.getContext('2d');
c.beginPath();
c.shadowColor = "rgba(200,200,200,0.5";
c.shadowOffsetX = 5;
c.shadowOffsetY = 5;
c.moveTo(100, 100);
c.lineTo(200, 200);
c.lineTo(100, 200);
c.lineTo(20, 300);
c.closePath();
c.setLineDash([1, 0, 3, 3, 0]);
c.lineJoin = 'round';
c.lineWidth = 5;
c.fillStyle = '#00f';
c.fill();
c.strokeStyle = 'red';
c.stroke();

var c = document.getElementById("test");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();

// Create Starship canvas

// Function to make Starship going left and right

// Function who check origin point of ship 

// Function that create a rocket at origin point of the ship when wlick fire button

// Function that make the rocket going up and explode on hit the target or the end of canvas => reset the loop


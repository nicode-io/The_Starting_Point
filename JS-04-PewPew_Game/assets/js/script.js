// Starship draw
// Referance points for the Starship draw
let pointOneOne = 450;
let pointOneTwo = 1000;

// Function to draw starship relative to the two points ()
function shipDraw(pointOneOne, pointOneTwo) {
  let pointTwoOne = pointOneOne - 100;
  let pointTwoTwo = pointOneTwo - 100;
  let pointThreeOne = pointOneOne;
  let pointThreeTwo = pointOneTwo - 50;
  let pointFourOne = pointOneOne;
  let pointFourTwo = pointOneTwo - 100;
  let pointFiveOne = pointOneOne + 50;
  let pointFiveTwo = pointOneTwo - 150;
  let pointSixOne = pointOneOne + 100;
  let pointSixTwo = pointOneTwo - 100;
  let pointSevenOne = pointOneOne + 100;
  let pointSevenTwo = pointOneTwo - 50;
  let pointEightOne = pointOneOne + 200;
  let pointEightTwo = pointOneTwo - 100;
  let pointNineOne = pointOneOne + 100;
  let pointNineTwo = pointOneTwo;
  let canvas = document.querySelector('#test');
  c = canvas.getContext('2d');
  c.clearRect(0,0,canvas.width,canvas.height);
  c.beginPath();
  c.shadowColor = "rgba(200,200,200,0.5";
  c.shadowOffsetX = 0;
  c.shadowOffsetY = 0;
  c.shadowBlur = 20;
  c.moveTo(pointOneOne, pointOneTwo); // line1
  c.lineTo(pointTwoOne, pointTwoTwo); // line2
  c.lineTo(pointThreeOne, pointThreeTwo); // line3
  c.lineTo(pointFourOne, pointFourTwo); // line4
  c.lineTo(pointFiveOne, pointFiveTwo); // line5
  c.lineTo(pointSixOne, pointSixTwo); // line6
  c.lineTo(pointSevenOne, pointSevenTwo); // line7
  c.lineTo(pointEightOne, pointEightTwo); // line8
  c.lineTo(pointNineOne, pointNineTwo); // line 9
  c.closePath();
  c.lineJoin = 'round';
  c.lineWidth = 10;
  c.fillStyle = 'rgba(241,54,53,1)';
  c.fill();
  c.strokeStyle = 'rgba(102,103,149,1';
  c.stroke();
  c.beginPath();
  c.ellipse((pointOneOne+50), (pointOneTwo-60), 30, 40, Math.PI / 1, 0, 2 * Math.PI);
  c.lineWidth = 10;
  c.fillStyle = 'rgba(201,238,99,1)';
  c.fill();
  c.strokeStyle = 'rgba(102,103,149,1';
  c.stroke();
};


// Draw initial ship 
shipDraw(pointOneOne, pointOneTwo);
missileDraw();
// Move up/down/right/left
document.addEventListener("keyup", () => {
  if (event.keyCode === 37) {
      if (pointOneOne >= 190) {
        pointOneOne -= 80;
        shipDraw(pointOneOne, pointOneTwo);
      }
    } else if (event.keyCode === 39) {
      if (pointOneOne <= 710) {
        pointOneOne += 80;
        shipDraw(pointOneOne, pointOneTwo);
      } 
    // Up and Down - not fully functionnal
    } else if (event.keyCode === 40) {
      if (pointOneTwo <= 950) {
        pointOneTwo += 80;
        shipDraw(pointOneOne, pointOneTwo);
      }
    } else if (event.keyCode === 38) {
      if (pointOneTwo >= 220) {
        pointOneTwo -= 80;
        shipDraw(pointOneOne, pointOneTwo);
      }
    }
});

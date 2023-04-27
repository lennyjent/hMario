//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 0;
var positionY = 0;
var velocity = 5;
var reverse = false;
var ball = document.getElementsByClassName("bighead");

for (let i = 0; i < ball.length; i++) {
  console.log(ball[i]);
  setInterval(moveHead, 300, ball[i]);
}

//write a function that can change the position of the html element "ball"
function moveHead(thisHead) {
  // two x-axis coordinates
  var Xmin = 0;
  var Xmax = 85;

  if (reverse) {
    positionX = positionX - velocity;
    thisHead.style.left = positionX + "%";
  } else {
    positionX = positionX + velocity;
    thisHead.style.left = positionX + "%";
  }

  if (positionX > Xmax || positionX === Xmin) {
    reverse = !reverse;
  }
}

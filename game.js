var canvas;
var ctx;

var donaldImage = new Image();
donaldImage.src = "Donald.png";

var dragonImage = new Image();
dragonImage.src = "Maleificent.png";

var w, y, height, width;
x = 20;
y = 20;
height = 60;
width = 60;

var badX, badY, badWidth, badHeight;
badY = Math.random() * 500;
badX = Math.random() * 800;
badWidth = 40;
badHeight = 40;

var keys= [];
var score = 0;

window.onkeydown = function (event)
{
  keys[event.key] = true; 
  this.console.log(event)
}

window.onkeyup = function (event)
{
  keys[event.key] = false; 
}

function startGame()
{
  canvas = document.getElementById("gc");
  ctx  = canvas.getContext("2d");
  window.setInterval(update, 100);
  moveBadGuy();
}

function displayBadGuy(badX, badX){

}

function update()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    moveBadGuy(badX, badY);
    moveGoodGuy();

    console.log("bad X = " + badX);
    console.log("bad Y = " + badY);    
    console.log("X = " + x);   
    console.log("Y = " + y);     

  if(checkCollisions(badHeight, badWidth, badX, badY, width, height, x, y))
  {
  resposition();
  score += 5;
  }

  drawScore();
}

function moveGoodGuy(){

  if(keys["ArrowRight"] == true && x <= 750)
    x+=10;
    
  if(keys["ArrowLeft"] == true && x >= 0)
    x-=10;
  

  if(keys["ArrowUp"] == true && y >= -5)
    y-=10;
  

  if(keys["ArrowDown"] == true && y <= 450)
    y+=10;

  /*ctx.fillStyle = "lavender";
  ctx.fillRect(x, y, height, width);*/

  ctx.drawImage(donaldImage, x, y, width, height);

}
      
function drawScore()
{
  ctx.fillStyle = "white";
  ctx.font = "20px Verdana";
  ctx.fillText("Score: " + score, 10, 50)
  console.log("Score: " + score)
}

function moveBadGuy(){
  /*ctx.fillStyle = "black";
  ctx.fillRect(badX, badY, badHeight, badWidth);*/
  // badX = Math.random() * 800;
  // badY = Math.random() * 500;
  ctx.drawImage(dragonImage, badX, badY, badWidth, badHeight);
}
  
function resposition(){
  {
    badY = Math.random() * 500;
    badX = Math.random() * 800;
    moveBadGuy()
  }
}


function checkCollisions(rect1Width, rect1Height, rect1XPos, rect1YPos,
rect2Width, rect2Height, rect2XPos, rect2YPos) 
{
   if (rect1XPos < rect2XPos + rect2Width &&
     rect1XPos + rect1Width > rect2XPos &&
     rect1YPos < rect2YPos + rect2Height &&
     rect1Height + rect1YPos > rect2YPos) 
   { 
    return true;
   }
   else{
    return false
   }   
}

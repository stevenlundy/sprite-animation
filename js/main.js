var c = document.getElementById('pane').getContext('2d');
var sprites = new Image();
sprites.src = 'img/characterSprites.png';
var w = c.canvas.width;
var h = c.canvas.height;

var upKey, downKey, leftKey, rightKey;

// Canvas code here
var n = 0;
var m = 1;
var charX = 0;//845+120*n; // {0 <= n <= 2}
var charY = 90*m;//90*m; // {0 <= m <= 2}
var charDir = 0;
var charState = 0;
var walking

var posX = 200;
var posY = 200;
//c.drawImage(sprites,srcX,srcY,srcW,srcH,destX,destY,destW,destH);
//c.drawImage(sprites,charX+charDir,charY+walking*(charState+30),22,22,200,200,22,22);

function clearCanvas() {
  c.clearRect(0,0,w,h);
}

function drawSprite(){
    charY = 90*m;
  if (upKey) {
    walking = 1;
    charState = (charState+30)%60;
    charDir = 60;
  } else if (downKey) {
    walking = 1;
    charState = (charState+30)%60;
    charDir = 0;
  } else if (leftKey) {
    walking = 1;
    charState = (charState+30)%60;
    charDir = 30;
  } else if (rightKey) {
    walking = 1;
    charState = (charState+30)%60;
    charDir = 90;
  } else {
    walking = 0;
    charState = 0;
  }
  c.drawImage(sprites,charX+charDir,charY+walking*(charState+30),30,30,200,200,30,30);
}
function loop() {
  clearCanvas();
  drawSprite();
}
keyDown = function(evt) {
  if (evt.keyCode == 38 || evt.keyCode == 87) {    // Up arrow or 'w' means up
    upKey = true;
    evt.preventDefault();
  }
  if (evt.keyCode == 40 || evt.keyCode == 83) {    // Down arrow or 's' means down    
    downKey = true;    
    evt.preventDefault();  
  }
  if (evt.keyCode == 37 || evt.keyCode == 65) {    // Left arrow or 'a' means left
    leftKey = true;
    evt.preventDefault();
  }
  if (evt.keyCode == 39 || evt.keyCode == 68) {    // Right arrow or 'd' means right    
    rightKey = true;    
    evt.preventDefault();  
  }
};
keyUp = function(evt) {
  if (evt.keyCode == 38 || evt.keyCode == 87) {    // Up arrow or 'w' means up
    upKey = false;
    evt.preventDefault();
  }
  if (evt.keyCode == 40 || evt.keyCode == 83) {    // Down arrow or 's' means down    
    downKey = false;    
    evt.preventDefault();  
  }
  if (evt.keyCode == 37 || evt.keyCode == 65) {    // Left arrow or 'a' means left
    leftKey = false;
    evt.preventDefault();
  }
  if (evt.keyCode == 39 || evt.keyCode == 68) {    // Right arrow or 'd' means right    
    rightKey = false;    
    evt.preventDefault();  
  }
};
document.addEventListener('keydown', keyDown, false);
document.addEventListener('keyup', keyUp, false);

setInterval(loop, 1000/10);
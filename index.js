const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');


let speed = 20;
//The value of speed is set to 20.
//The game will update and redraw the game board 20 times per second.
let tileCount= 20;
//Canvas is set to 400x400 pixels and the tileCount is set to 20.
//Each tile on the game board will occupy an area of 20x20 pixels.
let tileSize = canvas.width / tileCount;
// By dividing the Canvas.width by tileCount this determines the width
//of each individual tile that is required to distribite the tiles 
//withing the canvas width.
let headX = 15;
let headY = 15;
//Setting headX to 15 and headY to 15 means the snake's head will initially be positioned 
//at the intersection of the 15th column and the 15th row on the game board.
let direction = 'up';
// Initial direction of the snake at the start of the game.
let gameOver = false;

let itemX = 5;
let itemY = 5;
let itemCollected = false;
//Variables defined for the item position & status

// Added event listener to capture arrow key presses
document.addEventListener('keydown', handleKeyPress);
//WASD mapping arrow key presses - MOVEMENT
function handleKeyPress(event) {
    const key = event.keyCode;
    
    if (key === 65 && direction !== 'right') {
      direction = 'left';
    } else if (key === 87 && direction !== 'down') {
      direction = 'up';
    } else if (key === 68 && direction !== 'left') {
      direction = 'right';
    } else if (key === 83 && direction !== 'up') {
      direction = 'down';
    }
    //This condition checks if the key is equal to the keycode value for 'W,A,S,D' 
    //and if the current direction of the snake is not 'X'. 
    //If both conditions are true, the direction is set to 'X'.
  }


//game loop for drawing GAME
//GameFunctions*
function drawGame() {
  clearScreen();
  if (gameOver) {
    console.log("Game Over");
    return; // Stop the game loop
  }
  moveSnake();
  checkItemCollection();
  generateItemPosition(); // Generate item position
  drawSnake();
  drawItem();

  setTimeout(drawGame, 1000 / speed);
}

// setTimeOut to adjust game speed(difficulty)
// 1000 Millaseconds = 1 second 


function clearScreen(){
    ctx.fillStyle = 'orange';
    ctx.fillRect(0,0,canvas.width, canvas.height)
}
//COLOR OF THE DRAWING BOARD - Fill RECTANGLE where 0,0 is starting point position and covers the size of canvas Width and Height


function moveSnake() {
    if (direction === 'left') {
      headX--;
    } else if (direction === 'up') {
      headY--;
    } else if (direction === 'right') {
      headX++;
    } else if (direction === 'down') {
      headY++;
    }
    // Check for border collisions - OUTA BOUNDS
  if (headX < 0 || headX >= tileCount || headY < 0 || headY >= tileCount) {
    gameOver = true;
  }
  //Checks if the snake's head position is outside the game board boundaries 
  //(left, right, top, or bottom) by comparing the headX and headY values with the tileCount. 
  //If any condition is true, Game ends. (Die)
  }
  
  function checkItemCollection() {
    if (headX === itemX && headY === itemY && !itemCollected) {
      itemCollected = true;
      // Additional logic when the item is collected
    }
  }

function drawSnake(){
    ctx.fillStyle = 'blue';
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize,tileSize);
}
//Drawing the snake as a rectangle(head x and y multiplied against tileCount)in order
//to translate the tile-based coordinates of the snake's head to pixel-based coordinates on the canvas.
function drawItem() {
  ctx.fillStyle = 'purple';
  ctx.fillRect(itemX * tileSize, itemY * tileSize, tileSize, tileSize);
}
//itemX * tileSize calculates the actual pixel position of the item on the canvas based on the tile size.
// It takes the X-coordinate of the item (itemX) and multiplies it by the size of each tile (tileSize). 
//This calculation gives the X-position in pixels where the item should be drawn on the canvas.

function generateItemPosition() {
  if (!itemCollected) {
    // Only generate a new item position if the previous item has been collected
    return;
  }
  
  itemX = Math.floor(Math.random() * tileCount);
  itemY = Math.floor(Math.random() * tileCount);
  itemCollected = false;
}
//MATH RANDOM generates a value between 0-1. Then it multiplies the random decimal value by TileCount
//which gives random value between 0 and 'tilecount'. This is then a random index in the canvas.

drawGame();
//Called initially to kickstart the game loop. Initiating the continious drawing. 
//It also updates the game


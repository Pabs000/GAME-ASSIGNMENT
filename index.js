const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let speed = 7;

let tileCount= 20;
let tileSize = canvas.width / tileCount - 2;
let headX = 10;
let headY = 10;
let direction = 'right'; // Initial direction of the snake

// Add event listener to capture arrow key presses
document.addEventListener('keydown', handleKeyPress);

// Event handler for arrow key presses
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
  }


//game loop for drawing GAME
//GameFunctions*
function drawGame(){
    clearScreen();
    moveSnake();
    drawSnake();
    setTimeout(drawGame, 1000/ speed);
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
    
    // Wrap snake around the canvas-This code block checks the position of the snake's head (headX and headY) 
    //and wraps it around the canvas edges if it goes beyond the boundaries.Less than 0 outa bounds. 
    if (headX < 0) {
      headX = tileCount - 1;
    } else if (headX >= tileCount) {
      headX = 0;
    }
    
    if (headY < 0) {
      headY = tileCount - 1;
    } else if (headY >= tileCount) {
      headY = 0;
    }
  }
  

function drawSnake(){
    ctx.fillStyle = 'blue';
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize,tileSize);
}
//drawing the snake as a rectangle(head x and y multiplied against tileCount to position in Tiles) 

drawGame();


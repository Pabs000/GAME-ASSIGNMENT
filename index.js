const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let speed = 5;

let tileCount= 20;
let tileSize = canvas.width / tileCount - 5;
let headX = 15;
let headY = 15;
let direction = 'up';
// Initial direction of the snake at the start of the game.
let gameOver = false;

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
    // This condition checks if the key is equal to the keycode value for 'W,A,S,D' 
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
  drawSnake();
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
  }
  

function drawSnake(){
    ctx.fillStyle = 'blue';
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize,tileSize);
}
//drawing the snake as a rectangle(head x and y multiplied against tileCount to position in Tiles) 

drawGame();
//Called initially to kickstart the game loop. Initiating the continious drawing. 
//It also updates the game
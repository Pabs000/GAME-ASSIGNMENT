const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let speed = 7;

let tileCount= 20;
let tileSize = canvas.width / tileCount - 2;
let headX = 10;
let headY = 10;


//game loop for drawing GAME
function drawGame(){
    clearScreen();
    drawSnake();
    setTimeout(drawGame, 1000/ speed);
}
// setTimeOut to adjust game speed(difficulty)
// 1000 Millaseconds = 1 second 

function clearScreen(){
    ctx.fillStyle = 'orange';
    ctx.fillRect(0,0,canvas.width, canvas.height)
}
//COLOR OF THE DRAWING BOARD - Fill RECTANGLE where 0,0 is starting point and covers the size of canvas Width and Height

function drawSnake(){
    ctx.fillStyle = 'blue';
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize,tileSize);
}
//drawing the snake as a rectangle(head x and y multiplied against tileCount to position in Tiles) 


drawGame();


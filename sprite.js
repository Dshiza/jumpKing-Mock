class Sprite {
  constructor({ position, imgSrc }) {
    this.position = position; //can be x,y like character class
    this.image = new Image(); //takes 3 args
    this.image.src = imgSrc;
    console.log(this.image.src);

    this.image.onload = () => {
      this.scaleImg_W = CANVAS_WIDTH / this.image.width;
      this.scaleImg_H = CANVAS_HEIGHT / this.image.height;
    };
  }

  draw() {
    if (!this.image) return;

    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.image.width * this.scaleImg_W,
      this.image.height * this.scaleImg_H
    );
    console.log(this.scaleImg_H + "    " + this.scaleImg_W);
  }

  update() {
    this.draw();
  }
}

/*
// Define the size of each image in the sprite sheet
const IMAGE_WIDTH = 32;
const IMAGE_HEIGHT = 32;

// Define the size of the grid in the sprite sheet
const GRID_WIDTH = 10;
const GRID_HEIGHT = 10;

// Define the maximum X and Y coordinates for the canvas
const MAX_X = 640;
const MAX_Y = 640;

// Create a canvas element
const canvas = document.createElement('canvas');
canvas.width = IMAGE_WIDTH;
canvas.height = IMAGE_HEIGHT;

// Get the 2D rendering context of the canvas
const ctx = canvas.getContext('2d');

// Define the position of the sprite sheet
let sheetX = 0;
let sheetY = 0;

// Draw the first image from the sprite sheet onto the canvas
ctx.drawImage(spriteSheet, sheetX, sheetY, IMAGE_WIDTH, IMAGE_HEIGHT, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

// Define the player's position
let playerX = 0;
let playerY = 0;

// Update the player's position as they move
function movePlayer(direction) {
  switch (direction) {
    case 'up':
      playerY--;
      break;
    case 'down':
      playerY++;
      break;
    case 'left':
      playerX--;
      break;
    case 'right':
      playerX++;
      break;
  }
  
  // Check if the player has reached the maximum X or Y coordinate
  if (playerX >= MAX_X / IMAGE_WIDTH || playerY >= MAX_Y / IMAGE_HEIGHT) {
    // Update the position of the sprite sheet to display the next image
    sheetX += IMAGE_WIDTH;
    
    // Draw the next image from the sprite sheet onto the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(spriteSheet, sheetX, sheetY, IMAGE_WIDTH, IMAGE_HEIGHT, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
    
    // Reset the player's position
    playerX = 0;
    playerY = 0;
  }
  
  // Calculate the position of the player on the canvas
  const playerCanvasX = playerX * IMAGE_WIDTH;
  const playerCanvasY = playerY * IMAGE_HEIGHT;
  
  // Draw the player onto the canvas
  ctx.drawImage(playerImage, playerCanvasX, playerCanvasY);
}
*/

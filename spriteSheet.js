// Import Spritesheet.js library
import { SpriteSheet } from "spritesheet.js";

// Define the size and layout of the sprite sheet
const frameWidth = 1024;
const frameHeight = 576;
const framesPerRow = 44;
const framesPerColumn = 1;

// Load the images from a folder
const imagePaths = [
  "./img/jkm1.png",
  "./img/jkm2.png",
  "./img/jkm3.png",
  "./img/jkm4.png",
  "./img/jkm5.png",
  "./img/jkm6.png",
  "./img/jkm7.png",
  "./img/jkm8.png",
  "./img/jkm9-crow-lookUp.png",
  "./img/jkm10.png",
  "./img/jkm11.png",
  "./img/jkm12.png",
  "./img/jkm13.png",
  "./img/jkm14.png",
  "./img/jkm15.png",
  "./img/jkm16.png",
  "./img/jkm17.png",
  "./img/jkm18.png",
  "./img/jkm19.png",
  "./img/jkm20.png",
  "./img/jkm21.png",
  "./img/jkm22.png",
  "./img/jkm23.png",
  "./img/jkm24.png",
  "./img/jkm25.png",
  "./img/jkm26.png",
  "./img/jkm27.png",
  "./img/jkm28.png",
  "./img/jkm29.png",
  "./img/jkm30.png",
  "./img/jkm31.png",
  "./img/jkm32.png",
  "./img/jkm33.png",
  "./img/jkm34.png",
  "./img/jkm35.png",
  "./img/jkm36.png",
  "./img/jkm37.png",
  "./img/jkm38.png",
  "./img/jkm39.png",
  "./img/jkm40.png",
  "./img/jkm41.png",
  "./img/jkm42.png",
  "./img/jkm43.png",
  "./img/jkm44.png",
];
const images = imagePaths.map((path) => {
  const image = new Image();
  image.src = path;
  return image;
});

// Create the sprite sheet using Spritesheet.js
const spriteSheet = new SpriteSheet({
  images,
  frameWidth,
  frameHeight,
  framesPerRow,
  framesPerColumn,
});

// Export the sprite sheet in various formats
const json = spriteSheet.toJSON();
const xml = spriteSheet.toXML();
const css = spriteSheet.toCSS();

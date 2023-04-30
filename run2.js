function setupCanvas() {
  // Set the canvas position to "absolute"
  canvas.style.position = "absolute";

  // Calculate the center of the screen
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // Calculate the top and left position of the canvas to center it
  const canvasWidth = canvas.offsetWidth;
  const canvasHeight = canvas.offsetHeight;
  const canvasTop = centerY - canvasHeight / 2;
  const canvasLeft = centerX - canvasWidth / 2;

  // Set the top and left CSS properties to position the canvas in the center of the screen
  canvas.style.top = canvasTop + "px";
  canvas.style.left = canvasLeft + "px";
}

const scaledCanvas = {
  width: CANVAS_WIDTH * 0.3,
  height: CANVAS_HEIGHT * 0.3,
};

setupCanvas();

const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imgSrc: "./img/jkm1.png",
});
const player = new Character(50, 50);
player.resetCharacter();
function animate() {
  window.requestAnimationFrame(animate);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  background.update();
  //player.update();
  //colBlo.line();
  boundaries.forEach((boundary) => {
    boundary.draw();
  });
}

animate();

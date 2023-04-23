const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 1400);
const CANVAS_HEIGHT = (canvas.height = 950);

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
const character = new Character(10, 10);
character.resetCharacter();
const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imgSrc: "./img/jkm1.png",
});
///////////////////////////////////////////////////////////////////////////
//can be x,y like character class

////////////////////////////////////////////////////////////////////
//ctx.scale(0.47429365447, 0.355775169858);
//ctx.translate(0, -background.image.height);

let jumpStartTime = null;
let jumpDuration = null;

// RUN!
function animate() {
  window.requestAnimationFrame(animate);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  background.update();
  character.update();
}

animate();

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowRight":
      console.log("right arrow pressed!");
      keys.ArrowRight.pressed = true;
      break;
    case "ArrowLeft":
      console.log("Left arrow pressed!");
      keys.ArrowLeft.pressed = true;
      break;
    case " ":
      console.log("Jump!");
      if (jumpStartTime === null) {
        jumpStartTime = Date.now();
        console.log("just pressed" + jumpStartTime);
        keys.Space.pressed = true;
      }
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowRight":
      keys.ArrowRight.pressed = false;

      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;

      break;
    case " ":
      if (jumpStartTime !== null) {
        const jumpEndTime = Date.now();
        jumpDuration = jumpEndTime - jumpStartTime;
        keys.Space.pressed = false;
        keys.Space.released = true;
        character.onGround = false;
        console.log("after release - " + jumpDuration);
        jumpStartTime = null;
      }

      break;
  }
});

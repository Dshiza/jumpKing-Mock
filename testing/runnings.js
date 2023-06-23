const ctx = canvas.getContext("2d");
// Clear canvas and render the Quadtree nodes
ctx.clearRect(0, 0, canvas.width, canvas.height);

function renderQuadtree({ x, y, width, height }) {
  // Render nodes
  ctx.fillStyle = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
  ctx.fillRect(x, y, width, height); // Example node, replace with your Quadtree logic

  // Render lines
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(150, 150);
  ctx.stroke();
}
const can = document.getElementById("canvas");

// get mouse position
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();

  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}

document.addEventListener(
  "mousemove",
  function (evt) {
    const mousePos = getMousePos(can, evt);
    handleMouseMove(mousePos.x, mousePos.y);
  },
  false
);

//TODO
/*
1.get position
2.transverse and check if quadrant contains the mouse potiion
3. clear canvas and color the quadrant we are in







*/
// Event handlers
function handleMouseMove(mouseX, mouseY) {
  let new_node = quadtree.findQuadrant(mouseX, mouseY);
  if (new_node !== node) {
    node = new_node;
    const x = node.x;
    const y = node.y;
    const width = node.width;
    const height = node.height;
    /**/
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
    ctx.fillRect(x, y, width, height); // Example node, replace with your Quadtree logic
  }
}

let node = quadtree.findQuadrant(20, 0);

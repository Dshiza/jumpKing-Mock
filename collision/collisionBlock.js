class CollisionBlock {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.lines = [];
    ctx.fillStyle = "blue";
    /*
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();*/
  }

  line() {
    ctx.beginPath();
    ctx.moveTo(this.lines[0].x1, this.lines[0].y1);
    ctx.lineTo(this.lines[0].x2, this.lines[0].y2);
    console.log(
      "Points are:" + this.lines[0].x1,
      this.lines[0].y1 + "    " + this.lines[0].x2,
      this.lines[0].y2
    );
    ctx.strokeStyle = "blue";
    ctx.stroke();
  }
  handleCollision(object) {
    // Check if any of the lines of this collision block intersect with the other object
    for (let line of this.lines) {
      // Check if the line intersects with the other object's bounding box
      if (
        lineIntersectsRect(
          line,
          object.x,
          object.y,
          object.width,
          object.height
        )
      ) {
        // Handle the collision
        // ...
      }
    }
  }
}

class Boundary {
  static width = (8 * CANVAS_WIDTH) / 2080; //0.6745
  static height = (8 * CANVAS_HEIGHT) / 1568; //0.607
  constructor(position) {
    this.position = position;
    this.width = 8;
    this.height = 8;
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

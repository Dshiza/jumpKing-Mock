class Line {
  constructor(start, end) {
    this.x1 = start.x;
    this.y1 = start.y;
    this.x2 = end.x;
    this.y2 = end.y;
    this.vertical = false;
    this.horizontal = false;
    this.diagonal = false;
    //check if it horizontal,vertical or diagonal
    if (this.x2 - this.x1 == 0) {
      this.vertical = true;
    }
    if (this.y2 - this.y1 == 0) {
      this.horizontal = true;
    }
  }
  //Are points in order?. vertical, horizontal only
  makePointsInOrder() {
    if (this.x1 > this.x2) {
      let temp = this.x1;
      this.x1 = this.x2;
      this.x2 = temp;
    } // y coordinate isn't necessary, right?!
  }

  drawVertical(width) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x1, this.y1, width, this.y2 - this.y1);
  }
  drawHorizontal(height) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x1, this.y1, this.x2 - this.x1, height);
  }
}

class Rectangle {
  constructor(x, y, width, height) {
    this.x = x; // X-coordinate of the top-left corner of the rectangle
    this.y = y; // Y-coordinate of the top-left corner of the rectangle
    this.width = width; // Width of the rectangle
    this.height = height; // Height of the rectangle
  }

  containsPoint(point) {
    // Check if a given point is inside the rectangle
    return (
      point.x >= this.x &&
      point.x <= this.x + this.width &&
      point.y >= this.y &&
      point.y <= this.y + this.height
    );
  }

  intersects(range) {
    // Check if this rectangle intersects with another rectangle
    return !(
      range.x > this.x + this.width ||
      range.x + range.width < this.x ||
      range.y > this.y + this.height ||
      range.y + range.height < this.y
    );
  }

  // Other methods for the Rectangle class can be added as needed
}

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

  // Only for the starting point because when traversing I will also have to pay attention to this point, + points + problems
  containsLine(line) {
    return (
      line.x1 >= this.x &&
      line.y1 >= this.y &&
      line.x1 <= this.x + this.width &&
      line.y1 <= this.y + this.height
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

//Line should be hereditate using extends
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
      this.makePointsInOrder("vertical");
    }
    if (this.y2 - this.y1 == 0) {
      this.horizontal = true;
      this.makePointsInOrder("horizontal");
    }
  }
  //Are points in order?. vertical, horizontal only
  makePointsInOrder(orientation = "horizontal") {
    if (this.x1 > this.x2 && orientation == "horizontal") {
      let temp = this.x1;
      this.x1 = this.x2;
      this.x2 = temp;
    }
    if (this.y1 > this.y2 && orientation == "vertical") {
      let temp = this.y1;
      this.y2 = this.y2;
      this.y2 = temp;
    }
  }

  // If i want to apply width and height with x1,x2,y1,y2
  // I need to make points in order because fillRect treats width and height as absolute values - "No backwards rectangles"
  drawVertical(width) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x1, this.y1, width, this.y2 - this.y1);
  }
  drawHorizontal(height) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x1, this.y1, this.x2 - this.x1, height);
  }
}

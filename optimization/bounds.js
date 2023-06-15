class Boundary {
  static width = (8 * 1400) / 2080; //0.6745
  static height = (8 * 950) / 1568; //0.607
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
class Level {
  constructor() {
    this.levelImage = null;
    this.lines = [];
    this.levelNo = 0;
    this.isBlizzardLevel = false;
    this.isIceLevel = false;
    this.coins = [];
    this.hasProgressionCoins = false;
  }

  show() {
    push();
    image(this.levelImage, 0, 0);
    if (showingLines) {
      for (let l of lines) {
        l.Show();
      }
    }
    if (showingCoins) {
      for (let c of this.coins) {
        c.show();
      }
    }

    pop();
  }
}

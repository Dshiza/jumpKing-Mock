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

class quadtreeTrial {
  constructor(boundary, capacity) {
    this.boundary = boundary;
    this.capacity = capacity;
    this.lines = [];
    this.divided = false;
  }

  subdivide() {
    return false;
  }

  insert(line) {
    /*
        // If the point is outside the boundary of this Quadtree, ignore it
        if (!this.boundary.containsPoint(point)) {
        return false;
      }*/

    if (this.lines.length < capacity) this.lines.push(line);
    else {
      // if capacity full needs to subdivide the node and put those new lines in a lower branch
      if (!divided) this.subdivide();
      else
        return (
          this.topLeft.insert(line) ||
          this.topRight.insert(line) ||
          this.bottonLeft.insert(line) ||
          this.bottomRight.insert(line)
        );
    }
  }

  transverse() {
    for (line in this.lines) {
      console.log(line);
    }
  }
}
const CANVAS_WIDTH = 1400;
const CANVAS_HEIGHT = 950;
let overallBoundary = new Rectangle(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
let capacity = 30; // Can be various values, usually a good value is the number of elements in the tree, i expect max 30 lines in a specific level
const quadtree = new quadtreeTrial(overallBoundary, capacity);

quadtree.transverse();

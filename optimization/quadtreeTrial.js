class quadtreeTrial {
  constructor(boundary, capacity) {
    this.boundary = boundary;
    this.capacity = capacity;
    this.lines = [];
    this.divided = false;
  }

  subdivide() {
    const x = this.boundary.x;
    const y = this.boundary.y;
    const w = this.boundary.width / 2;
    const h = this.boundary.height / 2;

    // New areas for down branch nodes
    const topLeft = new Rectangle(x, y, w, h);
    const topRight = new Rectangle(x + w, y, w, h);
    const bottomLeft = new Rectangle(x, y + h, w, h);
    const bottomRight = new Rectangle(x + w, y + h, w, h);

    // New nodes
    this.topLeft = new quadtreeTrial(topLeft, this.capacity);
    this.topRight = new quadtreeTrial(topRight, this.capacity);
    this.bottomLeft = new quadtreeTrial(bottomLeft, this.capacity);
    this.bottomRight = new quadtreeTrial(bottomRight, this.capacity);

    // Does this node have branches?
    this.divided = true;
  }

  insert(line) {
    // If the point is outside the boundary of this Quadtree, ignore it
    if (!this.boundary.containsLine(line)) {
      return false;
    }

    if (this.lines.length < this.capacity) {
      this.lines.push(line);
      return true;
    } else {
      // if capacity full needs to subdivide the node and put those new lines in a lower branch
      if (!this.divided) this.subdivide();

      return (
        this.topLeft.insert(line) ||
        this.topRight.insert(line) ||
        this.bottomLeft.insert(line) ||
        this.bottomRight.insert(line)
      );
    }
  }

  hasChildren() {
    return (
      this.topLeft !== null ||
      this.topRight !== null ||
      this.bottomLeft !== null ||
      this.bottomRight !== null
    );
  }

  traverse() {
    console.log(this.lines);
    if (this.divided) {
      this.topLeft.traverse();
      this.topRight.traverse();
      this.bottomLeft.traverse();
      this.bottomRight.traverse();
    }
  }
}
const CANVAS_WIDTH = 1400;
const CANVAS_HEIGHT = 950;
let overallBoundary = new Rectangle(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
let capacity = 2; // Can be various values, usually a good value is the number of elements in the tree, i expect max 30 lines in a specific level
const quadtree = new quadtreeTrial(overallBoundary, capacity);

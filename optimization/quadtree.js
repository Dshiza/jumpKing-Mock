// Creates nodes based on area of canvas and corresponding lines to those nodes
// Algorithm works recursively subdividing the space into closer areas
class Quadtree {
  constructor(boundary, capacity) {
    this.boundary = boundary; // The boundary of this Quadtree
    this.capacity = capacity; // The maximum number of objects in this Quadtree before it splits
    this.lines = []; // The points stored in this Quadtree (empty initially)
    this.divided = false; // Whether this Quadtree has been divided into sub-Quadtrees yet
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

  query(characterDim, found=[]){
    let player = new Rectangle(characterDim.x, characterDim.y, characterDim.width, characterDim.height);
    //check if player is within a boundary/rectangle
    if( characterDim.x>= this.boundary.x &&
      characterDim.x <= this.boundary.x + this.boundary.width &&
      characterDim.y >= this.boundary.y &&
      characterDim.y <= this.boundary.y + this.boundary.height){
        
      }// correr todos os quadrantes que player esteja inserido e  - pode ser feito no check collision =verificar se as linhas desses quadrantes betem no player, retornar essas linhas 
    /*
    */ 
  }

  queryLine(line, found = []) {
    if (!this.boundary.intersectsLine(line)) {
      return found;
    } else {
      for (const line of this.lines) {
        if (line.containsPoint(point)) {
          found.push(point);
        }
      }

      if (this.divided) {
        this.topLeft.queryLine(line, found);
        this.topRight.queryLine(line, found);
        this.bottomLeft.queryLine(line, found);
        this.bottomRight.queryLine(line, found);
      }

      return found;
    }
  }

  // Get the closest point on a line to the player's position.
  getClosestLine(line) {
    const dx = line.x2 - line.x1;
    const dy = line.y2 - line.y1;
    const t =
      ((this.x - line.x1) * dx + (this.y - line.y1) * dy) / (dx * dx + dy * dy);

    if (t < 0) {
      return { x: line.x1, y: line.y1 };
    } else if (t > 1) {
      return { x: line.x2, y: line.y2 };
    } else {
      const x = line.x1 + t * dx;
      const y = line.y1 + t * dy;
      return { x, y };
    }
  }

  // Get the distance between two points.
  getDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  }

  divise(func, params = [], operator = "||") {
    const operators = {
      "||": (a, b) => a || b,
      "&&": (a, b) => a && b,
      // Add more operators as needed
    };

    const operatorFn = operators[operator];
    if (!operatorFn) {
      throw new Error("Invalid operator specified");
    }

    return operatorFn(
      operatorFn(this.topLeft[func](...params), this.topRight[func](...params)),
      operatorFn(
        this.bottomLeft[func](...params),
        this.bottomRight[func](...params)
      )
    );
  }

  hasChildren() {
    return (
      this.topLeft !== null ||
      this.topRight !== null ||
      this.bottomLeft !== null ||
      this.bottomRight !== null
    );
  }

  traverse(characterPos) {
    console.log(this.lines);
    // comparar em relacao aos pontos iniciais das linhas de cada
    //if player position in quadrant return lines
    //if player
    
    if (this.divided) {
      this.topLeft.traverse();
      this.topRight.traverse();
      this.bottomLeft.traverse();
      this.bottomRight.traverse();
    }
  }

  findQuadrant(mouseX, mouseY) {
    if (
      mouseX >= this.boundary.x &&
      mouseX <= this.boundary.x + this.boundary.width &&
      mouseY >= this.boundary.y &&
      mouseY <= this.boundary.y + this.boundary.height
    ) {
      if (!this.divided) {
        return this.boundary;
      } else {
        let result = null;

        result = this.divise("findQuadrant", [mouseX, mouseY]);

        if (result) {
          return result;
        }
      }
    }
    return false;
  }
}

/*


The Barnes-Hut algorithm is a method used for solving the N-body problem in physics, 
which involves simulating the gravitational interactions between multiple bodies. It is commonly used in the field of astrophysics, 
where it is used to simulate the behavior of galaxies, stars, and other celestial bodies.

In computer science, the Barnes-Hut algorithm is often used for problems involving large datasets and complex data structures,
such as spatial indexing and machine learning. 
It falls under the category of computational geometry and is a widely used method for constructing spatial data structures like 
quad trees, kd-trees, and octrees.

*/
let overallBoundary = new Rectangle(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
let capacity = 30; // Can be various values, usually a good value is the number of elements in the tree, i expect max 30 lines in a specific level
const quadtree = new Quadtree(overallBoundary, capacity);

class Quadtree {
    constructor(boundary, capacity) {
      this.boundary = boundary; // The boundary of this Quadtree
      this.capacity = capacity; // The maximum number of objects in this Quadtree before it splits
      this.points = []; // The points stored in this Quadtree (empty initially)
      this.divided = false; // Whether this Quadtree has been divided into sub-Quadtrees yet
    }
  
    subdivide() {
      const x = this.boundary.x;
      const y = this.boundary.y;
      const w = this.boundary.width / 2;
      const h = this.boundary.height / 2;
      
      const ne = new Rectangle(x + w, y, w, h);
      const nw = new Rectangle(x, y, w, h);
      const se = new Rectangle(x + w, y + h, w, h);
      const sw = new Rectangle(x, y + h, w, h);
      
      this.northeast = new Quadtree(ne, this.capacity);
      this.northwest = new Quadtree(nw, this.capacity);
      this.southeast = new Quadtree(se, this.capacity);
      this.southwest = new Quadtree(sw, this.capacity);
      
      this.divided = true;
    }
    // Inserts a point into this Quadtree
    insert(point) {
        // If the point is outside the boundary of this Quadtree, ignore it
      if (!this.boundary.containsPoint(point)) {
        return false;
      }
       // If this Quadtree has not yet reached capacity, add the point to its list of points
      if (this.points.length < this.capacity) {
        this.points.push(point);
        return true;
      } else {
        // If this Quadtree has not yet been divided, split it into four sub-Quadtrees
        if (!this.divided) {
          this.subdivide();
        }
        // Insert the point into each sub-Quadtree or not and ignore it
        return (
          this.northeast.insert(point) ||
          this.northwest.insert(point) ||
          this.southeast.insert(point) ||
          this.southwest.insert(point)
        );
      }
    }
  
    query(range, found = []) {
      if (!this.boundary.intersects(range)) {
        return found;
      } else {
        for (const point of this.points) {
          if (range.containsPoint(point)) {
            found.push(point);
          }
        }
        
        if (this.divided) {
          this.northeast.query(range, found);
          this.northwest.query(range, found);
          this.southeast.query(range, found);
          this.southwest.query(range, found);
        }
        
        return found;
      }
    }
    
    queryLine(line, found = []) {
      if (!this.boundary.intersectsLine(line)) {
        return found;
      } else {
        for (const point of this.points) {
          if (line.containsPoint(point)) {
            found.push(point);
          }
        }
        
        if (this.divided) {
          this.northeast.queryLine(line, found);
          this.northwest.queryLine(line, found);
          this.southeast.queryLine(line, found);
          this.southwest.queryLine(line, found);
        }
        
        return found;
      }
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

class CollisionDetector {
  constructor(quadtree) {
    this.quadtree = quadtree; // Quadtree containing boundaries for collision detection
    this.leftHit = false;
    this.rightHit = false;
    this.topHit = false;
    this.bottomHit = false;
  }

  checkCollision(characterX, characterY, characterWidth, characterHeight) {
    // Create a rectangle representing the character's position and size - codigo redundante...........
    const characterRect = {
      x: characterX,
      y: characterY,
      width: characterWidth,
      height: characterHeight,
    };
    const playerXQuadrant = this.quadtree.query(characterRect);

    // Get the closest point in the quadtree to the character's position
    //const collisions = this.getCollisions(characterRect, playerXQuadrant);
    console.log(characterRect);
    let collisions = [];
    for (let line of playerXQuadrant) {
      if (this.isRectCollidingWith(characterRect, line)) {
        collisions.push(line);
      }
    }
    console.log(collisions);
    // Check for collision between the character rectangle and the closest point

    //left
    //right
    //top
    //bottom

    // No collision detected
    return false;
  }

  // Get the closest point on a line to the player's position.
  getCollisions(characterRect, lines) {
    const dx = line.x2 - line.x1;
    const dy = line.y2 - line.y1;
    const t =
      ((this.x - line.x1) * dx + (this.y - line.y1) * dy) / (dx * dx + dy * dy);
  }

  isRectCollidingWith(characterRect, line) {
    if (line.horizontal) {
      let isRectWithinLineX =
        (line.x1 < characterRect.x && characterRect.x < line.x2) ||
        (line.x1 < characterRect.x + characterRect.width &&
          characterRect.x + characterRect.width < line.x2) ||
        (characterRect.x < line.x1 &&
          line.x1 < characterRect.x + characterRect.width) ||
        (characterRect.x < line.x2 &&
          line.x2 < characterRect.x + characterRect.width);
      let isRectWithinLineY =
        characterRect.y < line.y1 &&
        line.y1 < characterRect.y + characterRect.height;
      if (isRectWithinLineX && isRectWithinLineY) {
        ctx.fillStyle = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
        ctx.fillRect(line.x1, line.y1, line.x2 - line.x1, Boundary.height);
      }
      console.log(isRectWithinLineX, isRectWithinLineY);

      return isRectWithinLineX && isRectWithinLineY;
    }
  }

  // Get the distance between two points.
  getDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const collisionDetector = new CollisionDetector(quadtree);

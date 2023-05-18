class CollisionDetector {
  constructor(quadtree) {
    this.quadtree = quadtree; // Quadtree containing boundaries for collision detection
  }

  checkCollision(characterX, characterY, characterWidth, characterHeight) {
    // Create a rectangle representing the character's position and size
    const characterRect = {
      x: characterX,
      y: characterY,
      width: characterWidth,
      height: characterHeight,
    };

    // Get the closest point in the quadtree to the character's position
    const closestPoint = this.quadtree.getClosestPoint(characterX, characterY);

    // Check for collision between the character rectangle and the closest point
    if (
      characterRect.x + characterRect.width >= closestPoint.x &&
      characterRect.x <= closestPoint.x &&
      characterRect.y + characterRect.height >= closestPoint.y &&
      characterRect.y <= closestPoint.y
    ) {
      // Collision detected
      return true;
    }

    // No collision detected
    return false;
  }
}

const collisionDetector = new CollisionDetector(quadtree);

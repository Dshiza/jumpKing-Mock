//Constants affecting the character
const GRAVITY = 0.85;
const characterImage = new Image();
const maxJumpTimer = 30;
characterImage.src = "./img/posesOriginal/idle.png";
let currentSpeedY = 0;
let currentSpeedX = 0;

const terminalVelocity = 30;
// class that defines the mechanics of the character
class Character {
  // Every character jumps at the same height/ In this case only one character will be created
  static jumpHeight = 55;
  // Inicital position should be in the middle of CANVAS_WIDTH and at CANVAS_HEIGHT
  constructor(initialPosX, initialPosY) {
    this.x = initialPosX;
    this.y = initialPosY;
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.acceleration = {
      x: 0,
      y: GRAVITY, //0.1
    };
    this.width = 85;
    this.height = 105;

    this.onGround = true;
    this.jumpDirection = null;
    this.isStill = false;
    this.isRunning = false;
    this.isSlidding = false;
    this.isSliddingRight = false;
    this.isFacingRight = false;
    this.isCrouching = false;
    this.hasFallen = false;
    this.jumpHeld = false;

    characterImage.addEventListener(
      "load",
      () => {
        console.log("character image(s) loaded!");
      },
      false
    );
  }

  resetCharacter() {
    // Reset position to center of first level
    this.x = 670;
    this.y = 900 - this.height;

    this.onGround = true;
    this.jumpDirection = null;
    this.isStill = false;
    this.isRunning = false;
    this.isSlidding = false;
    this.isSliddingRight = false;
    this.isFacingRight = false;
    this.isCrouching = false;
    this.hasFallen = false;
    this.jumpHeld = false;
    this.movingRight = false;
    this.movingLeft = false;
    this.jumping = false;
  }
  // It wil have the image for the character , needs refactoring because it updates to draw
  // But character will have a crouching position
  draw() {
    ctx.drawImage(characterImage, this.x, this.y, this.width, this.height);
  }

  applyGravity() {
    if (
      !this.onGround &&
      this.y + this.height + this.velocity.y < CANVAS_HEIGHT
    ) {
      this.acceleration.y += GRAVITY;
      this.velocity.y = Math.min(
        this.velocity.y + this.acceleration.y,
        terminalVelocity
      );
    } else {
      this.velocity.y = 0;
      this.acceleration.y = 0;
      this.y = CANVAS_HEIGHT - this.height;
      this.onGround = true;
    }
  }

  moveLeft() {
    if (this.movingLeft && !this.jumpHeld) {
      this.velocity.x = -10;
    } else if (this.jumpHeld && this.movingLeft) {
      this.velocity.x = 0;
    }
  }

  moveRight() {
    if (this.movingRight && !this.jumpHeld) {
      this.velocity.x = 10;
    } else if (this.jumpHeld && this.movingRight) {
      this.velocity.x = 0;
    }
  }

  jump() {
    if (!this.jumpHeld && !this.jumping) {
      return;
    }
    if (this.jumpHeld && !this.onGround) {
      this.velocity.y = currentSpeedY;
      this.velocity.x = currentSpeedX;
      return;
    }

    if (!this.jumping && !this.onGround) {
      this.velocity.y = currentSpeedY;
      this.velocity.x = currentSpeedX;
      return;
    }

    if (this.jumpHeld && this.onGround) {
      if (this.movingLeft) {
        this.jumpDirection = "left";
      } else if (this.movingRight) {
        this.jumpDirection = "right";
      } else this.jumpDirection = "vertical";
    }
    if (this.jumping && !this.onGround) {
      this.velocity.y = Math.max(
        -terminalVelocity,
        -(terminalVelocity * jumpDuration) / 900
      ); // it has to have a min  range ->5-22 and max is 30
      if (this.jumpDirection == "left") this.velocity.x = -10;
      else if (this.jumpDirection == "right") this.velocity.x = 10;
      else this.velocity.x = 0;
      console.log("vel y in jump - " + this.velocity.y);
      currentSpeedY = this.velocity.y;
      currentSpeedX = this.velocity.x;
    }
  }

  UpdateJumpTimer() {
    if (this.OnGround && this.jumpHeld && this.jumpTimer < maxJumpTimer) {
      this.jumpTimer += 1;
    }
  }

  updateCharacterState() {}

  update() {
    this.draw();
    this.x += this.velocity.x;
    //this.velocity.y += this.aceleration.y;

    this.y += this.velocity.y;

    // TODO: Needs Refactoring
    this.velocity.x = 0;
    this.moveLeft();
    this.moveRight();
    this.jump();
    this.applyGravity();
    //tests
  }
}

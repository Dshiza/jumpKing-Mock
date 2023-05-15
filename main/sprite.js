// Each level has an image/map
class Sprite {
  constructor({ position, imgSrc }) {
    this.position = position; //can be x,y like character class
    this.image = new Image(); //takes 3 args
    this.image.src = imgSrc;
    console.log(this.image.src);

    this.image.onload = () => {
      this.scaleImg_W = CANVAS_WIDTH / this.image.width;
      this.scaleImg_H = CANVAS_HEIGHT / this.image.height;
    };
  }

  draw() {
    if (!this.image) return;

    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.image.width * this.scaleImg_W,
      this.image.height * this.scaleImg_H
    );
    console.log(this.scaleImg_H + "    " + this.scaleImg_W);
  }

  update() {
    this.draw();
  }
}


class Line {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    //check if it horizontal,vertical or diagonal
  }

  //Are points in order?. vertical, horizontal only
  makePointsInOrder() {
    if (this.x1 > this.x2) {
      let temp = this.x1;
      this.x1 = this.x2;
      this.x2 = temp;
    } // y coordinate isn't necessary, right?!
  }

  draw(width, height) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x1, this.y1, this.x2 - this.x1, height);
  }
}

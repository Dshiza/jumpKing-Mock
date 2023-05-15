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

  drawVertical(width) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x1, this.y1, width, this.y2 - this.y1);
  }
  drawHorizontal(height) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x1, this.y1, this.x2 - this.x1, height);
  }
}

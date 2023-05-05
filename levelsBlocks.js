let levels = [];

//first map
//let colBlo = new CollisionBlock(1, 2, 3, 4);
//colBlo.lines.push(new Line(600, 600, 50, 50));
let map1_2d = [];

for (let i = 0; i < map1Collisions.length; i += 260) {
  map1_2d.push(map1Collisions.slice(i, i + 260));
}

const boundaries = [];
/*
map1_2d.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 49)
      boundaries.push(
        new Boundary({
          x: j * Boundary.width,
          y: i * Boundary.height,
        })
      );
  });
});
*/

let levelLines = [];

//Creating lines for the level
// Creating horizontal lines -- code looks bad, feelsBadMan

for (let i = 0; i < map1_2d.length; i++) {
  let start = null;
  for (let j = 0; j < map1_2d[i].length; j++) {
    if (map1_2d[i][j] === 49) {
      if (start == null) {
        start = { x1: j * Boundary.width, y1: i * Boundary.height };
      }
    } else {
      if (start !== null) {
        boundaries.push(
          new Line(
            start.x1,
            start.y1,
            (j - 1) * Boundary.width + Boundary.width,
            (i - 1) * Boundary.height + Boundary.height
          )
        );
        start = null;
      }
    }
  }
  if (start !== null) {
    const end = {
      x: (map1_2d[i].length - 1) * Boundary.width + Boundary.width,
      y: i * Boundary.height,
    };
    boundaries.push(new Line(start, end));
  }
}
//Creating vertical lines
/*
for (let i = 0; i < map1_2d[0].length; i++) {
  let start = null;
  for (let j = 0; j < map1_2d.length; j++) {
    if (map1_2d[j][i] === 49) {
      if (start == null) {
        start = { x1: j * Boundary.width, y1: i * Boundary.height };
      }
    } else {
      if (start !== null) {
        boundaries.push(
          new Line(
            start.x1,
            start.y1,
            (j - 1) * Boundary.width + Boundary.width,
            (i - 1) * Boundary.height + Boundary.height
          )
        );
        start = null;
      }
    }
  }
  // last column
  if (start !== null) {
    const end = {
      x: i * Boundary.width,
      y: (map1_2d.length - 1) * Boundary.width + Boundary.width,
    };
    boundaries.push(new Line(start, end));
  }
}
*/
console.log(boundaries);
console.log(Boundary.width);

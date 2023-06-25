let levels = [];

//first map
let map1_2d = [];

for (let i = 0; i < map1Collisions.length; i += 260) {
  map1_2d.push(map1Collisions.slice(i, i + 260));
}

/*
map1_2d.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 49)
      lines.push(
        new Boundary({
          x: j * Boundary.width,
          y: i * Boundary.height,
        })
      );
  });
});
*/

//Creating lines for the level - brute force
const lines = [];
// Creating horizontal lines -- code looks bad, feelsBadMan
for (let i = 0; i < map1_2d.length; i++) {
  let startHorizontal = null,
    endHorizontal = null;
  for (let j = 0; j < map1_2d[i].length - 1; j++) {
    //instead of i can be of 0, all of same length
    if (map1_2d[i][j] === 49) {
      if (startHorizontal == null) {
        startHorizontal = { x: j * Boundary.width, y: i * Boundary.height };
      }
    } else {
      if (startHorizontal !== null) {
        endHorizontal = {
          x: j * Boundary.width,
          y: i * Boundary.height,
        };
        lines.push(new Line(startHorizontal, endHorizontal));
        startHorizontal = null;
      }
    }
  }
  /*
  if (startHorizontal !== null) {
    const endHorizontal = {
      x: map1_2d[i].length * Boundary.width,
      y: i * Boundary.height,
    };
    lines.push(new Line(startHorizontal, endHorizontal));
  }
  */
}

//Creating vertical lines
for (let i = 0; i < map1_2d[0].length; i++) {
  let startVertical = null,
    endVertical = null;
  for (let j = 0; j < map1_2d.length - 1; j++) {
    //console.log(map1_2d[i][j]);
    if (map1_2d[j][i] === 49) {
      if (startVertical == null) {
        startVertical = { x: i * Boundary.width, y: j * Boundary.height };
      }
    } else {
      if (startVertical !== null) {
        endVertical = {
          x: i * Boundary.width,
          y: j * Boundary.height,
        };
        lines.push(new Line(startVertical, endVertical));
        startVertical = null;
      }
    }
  }
  /*
  if (startVertical !== null) {
    const endVertical = {
      x: i * Boundary.width,
      y: (map1_2d.length - 1) * Boundary.height,
    };
    lines.push(new Line(startVertical, endVertical));
  }
  */
}

// NEED CODE FOR DIAGONAL LINES MOST LIKELY, will see when it appears in maps
let newLevel = new Level();
newLevel.lines = lines.filter((element) => {
  return !(element.x2 - element.x1 < 7 && element.y2 - element.y1 < 7);
});
levels.push(newLevel);
//is this it
//console.log("is this it");
newLevel.lines.splice(4, 5); // 14 nao
newLevel.lines.splice(8, 1);
console.log(newLevel.lines);

// Insert the lines into the quadtree.
levels[0].lines.forEach((line) => {
  quadtree.insert(line);
});

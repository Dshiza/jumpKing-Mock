let levels = [];

//first map
//let colBlo = new CollisionBlock(1, 2, 3, 4);
//colBlo.lines.push(new Line(600, 600, 50, 50));
let map1_2d = [];

for (let i = 0; i < map1Collisions.length; i += 260) {
  map1_2d.push(map1Collisions.slice(i, i + 260));
}

const boundaries = [];
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
console.log(boundaries);

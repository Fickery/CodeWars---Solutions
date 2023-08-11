var number = function (busStops) {
  let alight = 0;
  let exit = 0;
  let passengers = 0;
  for (let i = 0; i < busStops.length; i++) {
    alight += busStops[i][0];
    exit += busStops[i][1];
  }
  passengers = alight - exit;
  return passengers;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
// 10 + 3 + 5 = 18 - 5 - 8 = 5
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);

const processData = (data) =>
  data
    .map((row) => row.split(" -> "))
    .map(([start, end]) => ({
      start: start.split(",").map((n) => parseInt(n, 10)),
      end: end.split(",").map((n) => parseInt(n, 10)),
    }))
    .map(({ start, end }) => {
      const steps = [];

      if (start[0] === end[0]) {
        let step = [...start];

        while (step[1] !== end[1]) {
          steps.push([...step]);
          step[1] += step[1] < end[1] ? 1 : -1;
        }
        steps.push(end);
      } else if (start[1] === end[1]) {
        let step = [...start];

        while (step[0] !== end[0]) {
          steps.push([...step]);
          step[0] += step[0] < end[0] ? 1 : -1;
        }
        steps.push(end);
      } else {
        let step = [...start];

        while (step[0] !== end[0] && step[1] !== end[1]) {
          steps.push([...step]);
          step[0] += step[0] < end[0] ? 1 : -1;
          step[1] += step[1] < end[1] ? 1 : -1;
        }
        steps.push(end);
      }

      return steps;
    })
    .filter((row) => row.length > 0);

const prepareMap = (size) => {
  const map = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push(0);
    }
    map.push(row);
  }

  return map;
};

module.exports = (data) => {
  const input = processData(data);

  const map = prepareMap(1000);

  input.forEach((row) => {
    row.forEach(([x, y]) => {
      map[x][y] += 1;
    });
  });

  const count = map.reduce(
    (sum, row) => sum + row.reduce((rowSum, e) => rowSum + (e > 1 ? 1 : 0), 0),
    0
  );

  return count;
};

const convertToNumber = (n) => parseInt(n, 10);

const processData = (data) => [
  data[0].split(",").map(convertToNumber),
  convertToNumber(data[1]),
];

const FISH_INITIAL_TIEMOUT = 9;
const FISH_TIEMOUT = 7;

const prepareGroups = (input) => {
  const groups = [];

  input.forEach((fish) => {
    const i = groups.findIndex((f) => f.value === fish);

    if (i >= 0) {
      groups[i].count += 1;
    } else {
      groups.push({
        value: fish,
        count: 1,
      });
    }
  });

  return groups;
};

const getCount = (days, initialState) => {
  let count = 1;

  if (days > initialState) {
    count =
      getCount(days - initialState, FISH_TIEMOUT) +
      getCount(days - initialState, FISH_INITIAL_TIEMOUT);
  }

  return count;
};

module.exports = (data) => {
  const [input, days] = processData(data);
  const groups = prepareGroups(input);

  return groups.reduce(
    (sum, { count, value }) => sum + count * getCount(days, value),
    0
  );
};

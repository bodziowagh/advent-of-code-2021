const convertToNumber = (n) => parseInt(n, 10);

const processData = (data) => data[0].split(",").map(convertToNumber);

const findMedianPostition = (input) =>
  input.sort((a, b) => a - b)[Math.round(input.length / 2)];

const calculateFuel = (crabs, position) =>
  crabs.reduce((fuel, crab) => fuel + Math.abs(crab - position), 0);

module.exports = (data) => {
  const input = processData(data);

  const mostCommonPosition = findMedianPostition(input);

  return calculateFuel(input, mostCommonPosition);
};

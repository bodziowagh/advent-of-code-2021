const convertToNumber = (n) => parseInt(n, 10);

const processData = (data) => data[0].split(",").map(convertToNumber);

const FISH_INITIAL_TIEMOUT = 8;
const FISH_TIEMOUT = 6;
const NO_OF_DAYS = 80;

const iterate = (state) => {
  const result = [];

  state.forEach((fish) => {
    if (fish > 0) {
      result.push(fish - 1);
    } else {
      result.push(FISH_TIEMOUT);
      result.push(FISH_INITIAL_TIEMOUT);
    }
  });

  return result;
};

module.exports = (data) => {
  const input = processData(data);

  let state = input;
  for (let i = 0; i < NO_OF_DAYS; i++) {
    state = iterate(state);
  }

  return state.length;
};

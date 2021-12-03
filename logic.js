module.exports = (data) => {
  const input = data.map((record) =>
    record.split("").map((digit) => parseInt(digit, 2))
  );

  const ratios = input.reduce(
    (state, value) => state.map((ratio, i) => ratio + value[i]),
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  );

  const gamma = ratios
    .map((ratio) => (ratio > input.length / 2 ? 1 : 0))
    .join("");

  const epsilon = ratios
    .map((ratio) => (ratio < input.length / 2 ? 1 : 0))
    .join("");

  console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
};

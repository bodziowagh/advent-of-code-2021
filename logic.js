module.exports = (data) => {
  const inputs = data.map((record) =>
    record.split("").map((digit) => parseInt(digit, 2))
  );
  const inputSize = inputs[0].length;

  // Most common
  let filteredInputs = inputs;
  for (let position = 0; position < inputSize; position++) {
    console.log(filteredInputs);

    const mostCommon =
      filteredInputs.reduce(
        (sum, input) => sum + parseInt(input[position], 2),
        0
      ) >=
      filteredInputs.length / 2
        ? 1
        : 0;

    console.log("Most common: ", mostCommon);

    filteredInputs = filteredInputs.filter(
      (input) => input[position] === mostCommon
    );

    if (filteredInputs.length <= 1) {
      break;
    }
  }

  const oxygenGeneratorRating = parseInt(filteredInputs[0].join(""), 2);

  // Least common
  filteredInputs = inputs;
  for (let position = 0; position < inputSize; position++) {
    console.log(filteredInputs);

    const leastCommon =
      filteredInputs.reduce(
        (sum, input) => sum + parseInt(input[position], 2),
        0
      ) <
      filteredInputs.length / 2
        ? 1
        : 0;

    console.log("Least common: ", leastCommon);

    filteredInputs = filteredInputs.filter(
      (input) => input[position] === leastCommon
    );

    if (filteredInputs.length <= 1) {
      break;
    }
  }

  const co2scrubberRating = parseInt(filteredInputs[0].join(""), 2);

  console.log(oxygenGeneratorRating * co2scrubberRating);
};

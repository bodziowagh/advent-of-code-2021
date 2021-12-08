const fs = require("fs");
const logic = require("./logic");

try {
  const rawData = fs.readFileSync("./input.txt", "utf8");
  const data = rawData.split("\n");

  const result = logic(data);

  console.log(result);
} catch (e) {
  console.error("Program wypierdolił się na ryj z błędem:\n\n", e);
  process.exit(-1);
}

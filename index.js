const fs = require("fs");
const logic = require("./logic");

try {
  const data = fs.readFileSync("./input.txt", "utf8");

  logic(data);
} catch (e) {
  console.error("Program wypierdolił się na ryj z błędem:\n\n", e);
  process.exit(-1);
}

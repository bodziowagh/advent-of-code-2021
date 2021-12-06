const convertToInt = (n) => parseInt(n, 10);

const sliceArray = (arr, separator) => {
  const results = [];

  arr.forEach((row) => {
    if (row === separator || !results.length) {
      results.push([]);
    }

    if (row !== separator) {
      results[results.length - 1].push(row);
    }
  });

  return results;
};

const isWinningBoard = (board) => {
  const noOfColumns = board[0].length;

  // Columns
  for (let i = 0; i < noOfColumns; i++) {
    if (board.every((row) => row[i].selected)) {
      return true;
    }
  }

  // Rows
  if (board.some((row) => row.every((element) => element.selected))) {
    return true;
  }

  return false;
};

const logBoard = (board) => {
  console.log(
    board.map((row) =>
      row.map((element) =>
        element.selected ? `*${element.value}*` : ` ${element.value} `
      )
    )
  );
};

module.exports = (data) => {
  console.log("Preparing the data...");

  const [answersRaw, ...boardsRaw] = data;

  const answers = answersRaw.split(",").map(convertToInt);
  let boards = sliceArray(boardsRaw, "").map((board) =>
    board.map((row) =>
      row
        .split(" ")
        .filter((element) => element !== "")
        .map(convertToInt)
        .map((value) => ({
          value,
          selected: false,
        }))
    )
  );

  console.log("Finding the winner...");
  const winningBoards = [];

  for (let answer of answers) {
    console.log("Answer: ", answer);

    boards = boards.map((board) =>
      board.map((row) =>
        row.map((element) =>
          element.value === answer
            ? {
                ...element,
                selected: true,
              }
            : element
        )
      )
    );

    const newWinningBoards = boards.filter(isWinningBoard);

    boards = boards.filter((board) => !isWinningBoard(board));
    winningBoards.push(...newWinningBoards);

    console.log("Boards:", boards.length, winningBoards.length);

    if (boards.length <= 0) {
      console.log("done!");

      logBoard(newWinningBoards[0]);

      const score = newWinningBoards[0].reduce(
        (sum, row) =>
          sum +
          row.reduce(
            (rowSum, element) =>
              rowSum + (!element.selected ? element.value : 0),
            0
          ),
        0
      );

      console.log("Score: ", score * answer);

      break;
    }
  }
};

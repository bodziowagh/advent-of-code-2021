module.exports = (data) => {
  console.log(data);

  const commands = data
    .map((entry) => [entry.split(" ")[0], parseInt(entry.split(" ")[1], 10)])
    .map(([command, value]) => ({
      distance: command === "forward" ? value : 0,
      aim: command === "down" ? value : command === "up" ? -value : 0,
    }));

  const { distance, depth } = commands.reduce(
    (state, { distance, aim }) => {
      console.log(state);
      return {
        ...state,
        distance: state.distance + distance,
        depth: state.depth + state.aim * distance,
        aim: state.aim + aim,
      };
    },
    {
      distance: 0,
      aim: 0,
      depth: 0,
    }
  );

  console.log(distance * depth);
};

function solution(array, commands) {
  const answer = [];

  commands.forEach(command => {
    let newArray = [];
    newArray = array.slice(command[0] - 1, command[1]);
    newArray.sort((a, b) => a - b);
    answer.push(newArray[command[2] - 1]);
  })

  return answer;
}
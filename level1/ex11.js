function solution(array, commands) {
  const answer = [];
  
  commands.forEach(command => {
      const [i, j, k] = command;
      const number = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
      answer.push(number);
  });

  return answer;
}
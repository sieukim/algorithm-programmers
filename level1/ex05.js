function solution(board, moves) {
  let answer = 0;

  const stack = [];

  moves.forEach(move => {
    for (let i = 0; i < board.length; i++) {
      const next = board[i][move - 1];

      if (next === 0) continue;
      if (stack.length === 0) stack.push(next);
      else {
        const prev = stack.pop();

        if (next === prev) {
          answer += 2;
        } else {
          stack.push(prev);
          stack.push(next);
        }
      }
      board[i][move - 1] = 0;
      break;
    }
  });

  return answer;
}
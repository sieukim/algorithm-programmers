function solution(s) {
  const stack = [];

  s.split('').forEach(alpha => {
    const popped = stack.pop();

    // 연속되지 않는 경우
    if (popped !== alpha){
      if (popped) stack.push(popped);
      stack.push(alpha);
    }
  });

  return stack.length === 0 ? 1 : 0;
}
function solution(n, a, b) {
  let answer = 0;
  
  while (a !== b) {
      // 갱신
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
      answer += 1;
  }
  
  return answer;
}
function solution(n) {
  let answer = '';
  
  for (let i = 1; i <= n; i++) {
      answer += i % 2 ? '수' : '박';
  }
  
  return answer;
}
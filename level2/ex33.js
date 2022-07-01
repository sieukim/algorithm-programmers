function solution(n, left, right) {    
  const answer = [];
  
  for (let i = left; i <= right; i++) {
      // 2차원 배열에서의 위치
      const row = parseInt(i / n);
      const column = i % n;
      // 해당 위치에서의 값 추가
      answer.push(Math.max(row, column) + 1);
  }
  
  return answer;
}
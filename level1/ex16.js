function solution(left, right) {
  // 약수 배열 구하는 함수
  function getDivisor(n) {
      const divisor = [];
      
      for (let i = 1; i <= n; i++) {
          if (n % i === 0) {
              divisor.push(i);
          }
      }
      
      return divisor;
  }
  
  let answer = 0;
  
  for (let i = left; i <= right; i++) {
      const divisor = getDivisor(i);
      // 약수의 개수가 홀수인 경우
      if (divisor.length % 2) {
          answer -= i;
      }
      // 약수의 개수가 짝수인 경우
      else {
          answer += i;
      }
  }

  return answer;
}
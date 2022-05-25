function solution(n) {
  // 표현 방법 수
  let count = 0;
  
  for (let i = 1; i <= n; i++) {
      // 연속된 자연수의 합
      let sum = 0;
      
      for (let j = i; j <= n; j++) {
          // 합 갱신 
          sum += j;
          // n이 표현된 경우
          if (sum === n) {
              count += 1;
              break;
          }
          // n을 표현할 수 없는 경우
          if (sum > n) {
              break;
          }        
      }
  }
  
  return count;
}
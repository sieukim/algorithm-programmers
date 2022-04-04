function solution(n) {
  // 약수 배열 구하는 함수
  function getDivisor(number) {
      const divisor = [];
      
      for (let i = 1; i <= number; i++) {
          if (number % i === 0) {
              divisor.push(i);
          }
      }
      
      return divisor;
  }
  
  const divisor = getDivisor(n);
  
  return divisor.length > 0 ? divisor.reduce((a, b) => a + b) : 0
}
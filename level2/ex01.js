function solution(arr) {
  // 주어진 두 수의 최대 공약수를 반환하는 함수
  function getGcd(num1, num2) {
      let gcd = -1;
      
      // 큰 수
      const max = Math.max(num1, num2);
      // 작은 수
      const min = Math.min(num1, num2);
      // 큰 수를 작은 수로 나누었을 때 나머지
      const mod = max % min;
      
      // 나머지가 0인 경우
      if (mod === 0) {
          // 작은 수가 최대 공약수가 됨
          gcd = min;
      }
      // 나머지가 0이 아닌 경우
      else {
          // 작은 수와 나머지 값에 대한 재귀를 수행
          gcd = getGcd(min, mod);
      }
          
      return gcd;
  }
  
  // 주어진 두 수의 최소 공배수를 반환하는 함수
  function getLcm(num1, num2) {
      // 두 수의 최소 공배수 = 두 수의 곱 / 최대 공약수
      return num1 * num2 / getGcd(num1, num2);
  }
  
  // 주어진 숫자의 개수 
  const n = arr.length;
  
  return arr.reduce((a, b) => getLcm(a, b));
}
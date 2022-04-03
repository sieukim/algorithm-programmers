function solution(n, m) {
  const answer = [];
  
  // 최대 공약수 구하기
  function gcd(n, m) {
      let nIndex = n;
      let mIndex = m;
      
      while (nIndex > 0 && mIndex > 0) {
          while (n % nIndex !== 0) {
              nIndex--;
          }
          
          while (m % mIndex !== 0) {
              mIndex--;
          }
          
          if (nIndex === mIndex) {
              break;
          }
          
          if (nIndex > mIndex){
              nIndex--;
          } else {
              mIndex--;
          }
      }
      
      return nIndex;
  }
  
  // 최소 공배수 구하기
  function lcm(n, m) {
      let nIndex = 1;
      let mIndex = 1;
      
      while (n * nIndex !== m * mIndex){
          if (n * nIndex > m * mIndex) {
              mIndex++;
          } else {
              nIndex++;
          }
      }
      
      return n * nIndex;
  }
  
  answer.push(gcd(n, m));
  answer.push(lcm(n, m));
  
  return answer;
}
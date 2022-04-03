function solution(s) {
  // 숫자로만 구성된 문자열인지 확인하는 함수
  function isNumber(s) {
      for (let i = 0; i < s.length; i++) {
          // 숫자가 아닌 경우
          if (isNaN(s[i])) {
              return false;
          }
      }
      
      return true;
  }
  
  return (s.length === 4 || s.length === 6) && isNumber(s);
}
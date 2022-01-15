function solution(s) {
  // 숫자로만 구성된 문자열인지 확인하는 함수
  function isNumber(s) {
    let answer = true;

    s.split('').forEach(value => {
      if (isNaN(value)) answer = false;
    });

    return answer;
  }

  return (s.length === 4 || s.length === 6) && isNumber(s);
}
function solution(n) {
  // 2진수로 변환하여 1의 개수를 반환하는 함수
  function get_count(num) {
      // 2진수로 변환 + 배열로 변환
      const binary = num.toString(2).split('');
      // 0의 개수 반환
      return binary.filter(value => value === '1').length;
  }

  let answer = -1;
  
  for (let i = n + 1; i <= 1000000; i++) {
      // 1의 개수가 같은 경우
      if (get_count(n) === get_count(i)) {
          answer = i;
          // 종료
          break;
      }
  }
  
  return answer;
}
function solution(numbers) {
  // 숫자 -> 문자열 변환
  numbers = numbers.map(number => number.toString());

  // 정렬
  numbers.sort((a, b) => {
    if (a + b > b + a) {
      return -1;
    } else {
      return 1;
    }
  });

  // 00...0인 경우
  if (numbers[0] === '0') {
    return '0';
  }

  return numbers.join('');
}
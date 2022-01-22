function solution(s) {
  // 1. 주어진 문자열에서 모든 0을 제거
  function step1(str) {
    return str.split('').filter(value => {
      if (value === '0') zeroCount++;
      return value === '1';
    }).join('');
  }

  // 2. 주어진 숫자를 2진법으로 변환
  function step2(n) {
    const binary = [];

    while (n > 0) {
      binary.push(n % 2);
      n = parseInt(n / 2);
    }

    return binary.reverse().join('');
  }

  let count = 0;
  let zeroCount = 0;

  while (s !== '1') {
    s = step1(s);
    s = step2(s.length);
    count++;
  }

  return [count, zeroCount];
}
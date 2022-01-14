function solution(n) {
  // 10진법에서 3진법으로 변환 후 뒤집는 함수
  function toReversedTernary(number) {
    let answer = '';

    while (number > 0) {
      answer += number % 3;
      number = parseInt(number / 3);
    }

    return answer;
  }

  // 3진법에서 10진법으로 변환하는 함수
  function toDecimal(str) {
    let answer = 0;

    const n = str.length;

    for (let i = 0; i < n; i++) {
      answer += str[i] * Math.pow(3, n - i - 1);
    }

    return answer;
  }

  const ternaryStr = toReversedTernary(n).toString();
  const decimalNumber = toDecimal(ternaryStr);

  return decimalNumber;
}
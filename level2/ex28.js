function solution(n) {
  /*
      주어진 십진수를 변형된 삼진수로 변환하는 함수
      0, 1, 2 -> 1, 2, 3
  */
  function toTernary(number) {
    const ternary = [];

    while (number > 0) {
      const r = number % 3;

      // 3의 배수인 경우
      if (r === 0) {
        ternary.push(3);
        number = parseInt(number / 3) - 1;
      } else {
        ternary.push(r);
        number = parseInt(number / 3);
      }
    }

    return ternary.reverse();
  }

  /*
      주어진 삼진수를 124 규칙에 맞게 변환
      1, 2, 3 -> 1, 2, 4
  */
  const ternary = toTernary(n);

  const answer = ternary.map(value => {
    if (value === 3) return 4;
    else return value;
  })

  return answer.join('')
}
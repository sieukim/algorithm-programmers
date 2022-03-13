function solution(numbers) {
  // 십진수(number) -> 이진수(arr) 변환 함수
  function toBinary(x) {
    const arr = [];

    while (x > 0) {
      arr.push(x % 2);
      x = parseInt(x / 2);
    }

    return arr.reverse();
  }

  // 이진수(arr) -> 십진수(number) 변환 함수
  function toDecimal(x) {
    const arr = x.reverse();

    let number = 0;

    for (let i = 0; i < arr.length; i++) {
      number += arr[i] * (2 ** i);
    }

    return number;
  }

  // 양의 정수 x보다 크고 x와 비트가 1~2개 다른 수들 중에서 제일 작은 수를 찾는 함수
  function f(x) {
    const binary = toBinary(x).reverse();
    const n = binary.length;

    // 2^0의 자리수가 0인 경우
    if (binary[0] === 0) {
      // 2^0의 자리수 1로 변경
      binary[0] = 1;
    }
    // 2^0의 자리수가 1인 경우
    else {
      // 2^n의 자리수 0으로 추가
      binary.push(0);

      // 2^0의 자리수부터 2^n의 자리수까지 탐색했을 때,
      // 처음으로 0이 나오는 위치(인덱스)
      let index = -1;

      // 2^0의 자리수부터 2^n의 자리수까지 탐색
      for (let i = 0; i <= n; i++) {
        // 처음으로 0이 나온 경우
        if (binary[i] === 0) {
          index = i;
          break;
        }
      }

      // 2^index의 자리수 1로 변경
      binary[index] = 1;
      // 2^(index - 1)의 자리수 0으로 변경
      binary[index - 1] = 0;
    }
    return toDecimal(binary.reverse());
  }

  const answer = [];

  numbers.forEach(x => {
    answer.push(f(x));
  });

  return answer;
}
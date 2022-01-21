function solution(n) {
  // 이진수 배열을 십진수로 변환하는 함수
  function toDecimal(number) {
    let answer = 0;

    number.forEach((v, i) => {
      if (v === 1) {
        answer += Math.pow(2, number.length - 1 - i);
      }
    });

    return answer;
  }

  // 십진수를 이진수 배열로 변환하고 1의 개수를 반환하는 함수
  function toBinary(number) {
    const binary = [];
    let count = 0;

    while (number > 0) {
      // 2로 나눈 나머지
      const r = parseInt(number % 2);
      // 2로 나눈 몫
      const q = parseInt(number / 2);

      // 나머지가 1이면 개수 증가
      if (r === 1) count++;

      // 2진수 배열에 나머지 추가
      binary.push(r);

      // number 갱신
      number = q;
    }

    return [binary.reverse(), count];
  }

  let binary = [];

  const [_, count] = toBinary(n);

  // 주어진 n보다 크면서 1의 개수가 같은 최소의 수 찾기
  while (true) {
    const [newBinary, newCount] = toBinary(++n);

    if (newCount === count) {
      binary = newBinary;
      break;
    }
  }

  return toDecimal(binary);
}
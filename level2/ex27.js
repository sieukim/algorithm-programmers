function solution(n, t, m, p) {
  // 0~9 -> 0~9, 10~15 -> A~F 매핑
  const map = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
  };

  // 10진법 -> n진법 변환 함수
  function changeBase(number, n) {
    if (number === 0) return [0];

    const answer = [];

    while (number > 0) {
      answer.push(map[number % n]);
      number = parseInt(number / n);
    }

    return answer.reverse();
  }

  const answer = [];

  // 진법 변환된 수를 미리 담아두는 배열
  let numbers = [];
  let number = 0;
  let index = 0;

  while (answer.length < t) {
    numbers = changeBase(number, n);

    numbers.forEach((number, i) => {
      if (index === p - 1) {
        answer.push(number);
      }
      index = (index + 1) % m;
    });

    number++;
  }

  return answer.slice(0, t).join('');
}
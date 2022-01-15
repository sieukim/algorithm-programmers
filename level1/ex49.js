function solution(n, arr1, arr2) {
  // 이진수 배열 변환 함수
  function toBinaryArr(number) {
    const answer = [];

    while (number > 0) {
      answer.push(number % 2);
      number = parseInt(number / 2);
    }

    return answer.reverse();
  }

  // 맵 변환 함수
  function toMap(n, arr) {
    const answer = Array.from(Array(n), () => Array(n).fill(''));

    for (let i = 0; i < n; i++) {
      const column = toBinaryArr(arr[i]);

      while (column.length < n) {
        column.unshift(0);
      }

      for (let j = 0; j < n; j++) {
        answer[i][j] = column[j] === 0 ? ' ' : '#';
      }
    }

    return answer;
  }

  const map1 = toMap(n, arr1);
  const map2 = toMap(n, arr2);

  const map = [];

  // 두 map 비교
  for (let i = 0; i < n; i++) {
    let column = '';

    for (let j = 0; j < n; j++) {
      if (map1[i][j] === '#' || map2[i][j] === '#') {
        column += '#';
      } else {
        column += ' ';
      }
    }

    map[i] = column;
  }

  return map;
}
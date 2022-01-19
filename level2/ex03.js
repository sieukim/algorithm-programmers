function solution(arr1, arr2) {
  // 행렬 곱 결과: m x n 행렬
  const m = arr1.length;
  const n = arr2[0].length;
  const answer = Array.from(new Array(m), () => new Array(n));

  // j 번째 열의 모든 요소를 갖는 배열을 반환하는 함수
  function findColumn(arr, j) {
    const answer = [];
    const m = arr.length;
    const n = arr[0].length;

    for (let i = 0; i < m; i++) {
      answer.push(arr[i][j]);
    }

    return answer;
  }

  // 크기가 n x 1로 같은 두 배열의 곱을 구하는 함수
  function multiply(row, column) {
    let answer = 0;
    const n = row.length;

    for (let i = 0; i < n; i++) {
      answer += row[i] * column[i];
    }

    return answer;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const row = arr1[i];
      const column = findColumn(arr2, j);

      answer[i][j] = multiply(row, column);
    }
  }

  return answer;
}
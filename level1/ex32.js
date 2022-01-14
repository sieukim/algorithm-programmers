function solution(arr1, arr2) {
  // n x m 행렬
  const n = arr1.length;
  const m = arr1[0].length;

  // n x m 빈 행렬 생성
  const answer = Array.from(Array(n), () => new Array(m));

  // 행렬 덧셈
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return answer;
}
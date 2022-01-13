function solution(a, b) {
  let answer = 0;

  const n = a.length;

  for (let i = 0; i < n; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}
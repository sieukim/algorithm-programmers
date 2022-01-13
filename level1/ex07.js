function solution(absolutes, signs) {
  let answer = 0;

  const n = absolutes.length;

  for (let i = 0; i < n; i++) {
    answer += absolutes[i] * (signs[i] ? 1 : -1);
  }

  return answer;
}
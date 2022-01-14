function solution(arr) {
  // 최소값 구하기
  const min = arr.reduce((a, b) => Math.min(a, b));
  // 최소값 제거
  const answer = arr.filter(value => value !== min);

  return answer.length > 0 ? answer : [-1];
}
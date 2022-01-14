function solution(n) {
  // 주어진 숫자 -> 문자열 -> 배열
  const answer = n.toString().split("");

  // 각 요소: 문자열 -> 숫자
  for (let i = 0; i < answer.length; i++) {
    answer[i] = parseInt(answer[i]);
  }

  return answer.reverse();
}

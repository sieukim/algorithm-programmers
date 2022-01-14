function solution(n) {
  // 주어진 숫자 -> 문자열 -> 배열
  const answer = n.toString().split('');

  // 내림차순 정렬
  answer.sort((a, b) => b - a)

  return parseInt(answer.join(''));
}
function solution(n) {
  let answer = 0;

  // 주어진 숫자 -> 문자열 -> 배열
  const strArr = n.toString().split("");

  // 각 자릿수 더하기
  for (let i = 0; i < strArr.length; i++) {
    answer += parseInt(strArr[i]);
  }

  return answer;
}
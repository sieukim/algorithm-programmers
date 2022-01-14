function solution(a, b) {
  let answer = 0;

  // a 와 b 사이에 속한 모든 정수의 합을 구하는 함수
  function sum(a, b) {
    let answer = 0;

    for (let i = a; i <= b; i++) {
      answer += i;
    }

    return answer;
  }

  return a < b ? sum(a, b) : sum(b, a);
}
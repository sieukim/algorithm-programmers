function solution(num) {
  let answer = 0;

  function recursion(num) {
    // 재귀 종료 조건
    if (num === 1 || answer >= 500) return ;

    answer++;

    // step1
    if (num % 2) num = num * 3 + 1;
    else num = num / 2;

    // step2
    recursion(num);
  }

  recursion(num);

  return answer < 500 ? answer : -1;
}
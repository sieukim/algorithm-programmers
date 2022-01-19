function solution(n) {
  let answer = 0;

  // 주어진 정수부터 시작하여 연속하는 수를 더했을 때,
  // 합이 n이 되는지를 반환하는 함수
  function finn(i) {
    let sum = 0;

    while (i <= n && sum < n) {
      sum += i;
      i++;
    }

    if (sum === n) return true;
    else return false;
  }

  for (let i = 1; i <= n; i++) {
    if (finn(i)) answer++;
  }

  return answer;
}
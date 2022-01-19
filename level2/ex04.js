function solution(n) {
  const answer = [];

  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      answer.push(i);
    } else {
      // A % D = (B % D) + (C % D) (단, A = B + C)
      answer[i] = answer[i - 1] % 1234567 + answer[i - 2] % 1234567;
    }
  }

  return answer[n] % 1234567;
}
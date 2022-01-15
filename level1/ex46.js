function solution(n) {
  // 약수 배열을 구하는 함수
  function divisorArr(number) {
    const answer = [];

    for (let i = 1; i <= number; i++) {
      if (number % i === 0) answer.push(i);
    }

    return answer;
  }

  return divisorArr(n).reduce((a, b) => a + b);
}
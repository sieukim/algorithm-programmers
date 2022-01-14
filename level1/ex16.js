function solution(left, right) {
  let answer = 0;

  // 약수 개수를 구하는 함수
  function countDivisor(number) {
    let count = 0;

    for (let i = 1; i <= number; i++) {
      if (number % i === 0) count++;
    }

    return count;
  }

  for (let i = left; i <= right; i++) {
    const count = countDivisor(i);

    if (count % 2) answer -= i;
    else answer += i;
  }

  return answer;
}
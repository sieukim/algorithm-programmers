function solution(nums) {
  let answer = 0;

  // 소수 판별 함수
  function isPrime(num) {
    // 1인 경우 false 반환
    if (num === 1) return false;

    // 짝수인 경우 false 반환
    if (num % 2 === 0) return false;

    // num을 2부터 num의 제곱근까지 각각의 수로 나눈 나머지가 0인 경우 true 반환
    for (let i = 3; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  }

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer++;
      }
    }
  }

  return answer;
}
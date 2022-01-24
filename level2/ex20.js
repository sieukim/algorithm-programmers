function solution(n, k) {
  // 소수인지 판별하는 함수
  function isPrime(number) {
    // 숫자가 아닌 경우 소수가 아니다.
    if (isNaN(number)) return false;

    // 0과 1은 소수가 아니다.
    if (number < 2) return false;
    // 2보다 큰 짝수는 소수가 아니다.
    if (number > 2 && number % 2 === 0) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      // 약수가 존재하는 경우
      if (number % i === 0) return false;
    }

    return true;
  }

  // 10진수를 k진수로 변환하는 함수
  function changeBase(n, k) {
    let number = '';

    while (n > 0) {
      number += n % k;
      n = parseInt(n / k);
    }

    return number.split('').reverse().join('');
  }

  // 진법 변환 후 0을 기준으로 쪼개기
  const arr = changeBase(n, k).split(0);

  // 소수의 개수 세기
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    // 문자열을 정수로 변환
    const number = parseInt(arr[i]);

    // 소수인지 판별하여 개수 증가
    if (isPrime(number)) count++;
  }

  return count;
}
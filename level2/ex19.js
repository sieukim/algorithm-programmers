function solution(numbers) {
  // 소수인지 판별하는 함수
  function isPrime(number) {
    // 0과 1은 소수가 아니다.
    if (number <= 1) return false;
    // 2보다 큰 짝수는 소수가 아니다.
    if (number > 2 && number % 2 === 0) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      // 약수가 있는 경우
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }

  // 각 종이 조각에 적힌 숫자를 조합하여 만들 수 있는 모든 수를 구하는 함수
  function dfs(arr = [], str = '', index = 0) {
    // 탐색이 끝난 경우
    if (index === arr.length) {
      // 조합하여 만든 수
      const number = parseInt(str);

      // 현존하지 않는 조합인 경우
      if (!isNaN(number) && combinations.indexOf(number) === -1) {
        combinations.push(number);
      }

      // 탐색 종료
      return ;
    }

    // 현재 조합 내 존재하는 모든 위치에 새로운 문자를 넣는 경우
    for (let i = 0; i <= str.length; i++) {
      const newStr = str.slice(0, i) + arr[index] + str.slice(i);
      dfs(arr, newStr,index + 1);
    }

    // 새로운 문자를 안 넣는 경우
    dfs(arr, str, index + 1);
  }

  // 각 종이 조각에 적힌 숫자를 요소로 갖는 배열
  const arr = numbers.split('');
  // 각 종이 조각에 적힌 숫자를 조합하여 만든 모든 수를 요소로 갖는 배열
  const combinations = [];

  // 탐색 실행
  dfs(arr, '', 0);

  // 소수 개수
  let count = 0;

  // 모든 조합에서 소수 찾기
  for (let i = 0; i < combinations.length; i++) {
    // 소수인 경우
    if (isPrime(combinations[i])) {
      count++;
    }
  }

  return count;
}
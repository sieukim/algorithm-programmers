// nPr 반환 함수
function getPerms(arr, r) {
  // r = 1
  if (r === 1) {
      return arr.map(value => [value]);
  }
  
  // 순열 
  const perms = [];
  
  for (let i = 0; i < arr.length; i++) {
      // i번 요소로 시작하는 순열
      const perms_i = getPerms([
          ...arr.slice(0, i),
          ...arr.slice(i + 1)
      ], r - 1).map(perm => [arr[i], ...perm]);
      
      // 추가
      perms.push(...perms_i);
  }
  
  return perms;
}

// 소수 판별 함수
function isPrime(number) {
  // 0, 1
  if (number <= 1) {
      return false;
  }
  
  for (let i = 2; i < number; i++) {
      if (number % i === 0) {
          return false;
      }
  }
  
  return true;
}

function solution(numbers) {
  // 소수 집합
  const primes = new Set();
  
  for (let i = 1; i <= numbers.length; i++) {
      // nPi
      const perms = getPerms(numbers.split(''), i).map(perm => parseInt(perm.join('')));

      // 소수 판별
      for (const perm of perms) {
          // 소수인 경우
          if (isPrime(perm)) {
              primes.add(perm);
          }
      } 
  }

  return primes.size;
}
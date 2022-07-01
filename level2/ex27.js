// t회차까지의 모든 숫자를 반환하는 함수
function getTotal(base, t, m) {
  let total = '';
  let n = 0;
  
  while (total.length <= t * m) {
      total += n.toString(base);
      n += 1;
  }
  
  return total.toUpperCase();
}

function solution(base, t, m, p) {
  // t회차까지의 모든 숫자
  const total = getTotal(base, t, m);
  
  // 튜브가 필요한 숫자
  let answer = '';
  
  for (let i = 0; i < t; i++) {
      answer += total[i * m + p - 1];
  }
  
  return answer;
}
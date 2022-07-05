// 진법 변환 함수
function change_base(n, base=3, base_char='412') {
  const mod = n % 3;
  const div = mod % 3 === 0 ? parseInt(n / 3) - 1 : parseInt(n / 3);
  
  if (div === 0) return base_char[mod];
  else return change_base(div) + base_char[mod]
}

function solution(n) {
  return change_base(n);
}
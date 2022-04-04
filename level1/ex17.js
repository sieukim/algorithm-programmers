function solution(n) {
  // 3진법 변환
  const ternary = n.toString(3);
  // 10진법 변환(3진법 뒤집음)
  const decimal = parseInt(ternary.split('').reverse().join(''), 3);
  return decimal;
}
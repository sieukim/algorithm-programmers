function solution(n) {
  // 주어진 수의 제곱근 구하기
  const sqrt = Math.sqrt(n);

  // 제곱근이 정수인 경우 제곱근 + 1의 제곱을 반환
  if (Number.isInteger(sqrt)) return Math.pow(sqrt + 1, 2);
  else return -1;
}
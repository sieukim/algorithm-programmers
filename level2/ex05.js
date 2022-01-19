function solution(A, B){
  const n = A.length;

  // 오름차순 정렬
  A.sort((a, b) => a - b);
  // 내림차순 정렬
  B.sort((a, b) => b - a);

  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += A[i] * B[i];
  }

  return sum;
}
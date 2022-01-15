function solution(d, budget) {
  let answer = 0;
  let sum = 0;

  // 오름차순 정렬
  d.sort((a, b) => a - b);

  // 예산이 넘기전까지 개수 세기
  for (let i = 0; i < d.length; i++) {
    if (sum + d[i] > budget) break;

    sum += d[i];
    answer++;
  }

  return answer;
}
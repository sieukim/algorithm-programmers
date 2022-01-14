function solution(numbers) {
  let answer = [];
  const n = numbers.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  // 중복 제거
  answer = [...new Set(answer)];
  // 오름차순 정렬
  answer.sort((a, b) => a - b);

  return answer;
}
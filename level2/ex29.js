function dfs(numbers, target, index = 0, result = 0, answer = 0) {
  // 종료
  if (index === numbers.length) {
      // 타겟 넘버 생성 여부
      if (result === target) {
          return 1;
      } else {
          return 0;
      }
  }
  
  // 더하기
  answer += dfs(numbers, target, index + 1, result + numbers[index]);
  // 빼기
  answer += dfs(numbers, target, index + 1, result - numbers[index]);
  
  return answer;
}

function solution(numbers, target) {
  return dfs(numbers, target);
}
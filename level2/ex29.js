function solution(numbers, target) {
  let answer = 0;

  // 주어진 정수 집합 오름차순 정렬
  numbers.sort((a, b) => a - b);

  // dfs
  const dfs = (sum, index, arr) => {
    // 모든 수에 대한 연산이 결정되었을 때
    if (index === numbers.length) {
      // 타겟 넘버를 만든 경우
      if (sum === target) {
        answer++;
      }
      return;
    }

    // 현재 인덱스 요소를 합에서 빼서 dfs 실행
    dfs(sum - numbers[index], index + 1, [...arr, '-']);
    // 현재 인덱스 요소를 합에서 더해서 dfs 실행
    dfs(sum + numbers[index], index + 1, [...arr, '+']);
  }

  // dfs 실행
  dfs(0, 0, []);

  return answer;
}
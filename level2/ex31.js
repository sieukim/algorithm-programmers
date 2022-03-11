function solution(s) {
  // 올바른 문자열인지 확인하는 함수
  function isCorrect(arr) {
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
      // 현재 괄호
      const value = arr[i];

      // 스택이 빈 경우
      if (stack.length === 0) {
        stack.push(value);
        continue;
      }

      // 스택 최상단 요소
      const popped = stack.pop();

      // 괄호가 열린 경우
      if (popped === '[' && value === ']') {
        continue;
      }
      if (popped === '{' && value === '}') {
        continue;
      }
      if (popped === '(' && value === ')') {
        continue;
      }

      // 원상 복구
      stack.push(popped);
      // 현재 괄호 추가
      stack.push(value);
    }
    return stack.length === 0;
  }

  let answer = 0;
  const arr = s.split('');

  // 왼쪽으로 이동하며 올바른 괄호 문자열이 되게 하는 x 개수 세기
  for (let i = 0; i < arr.length; i++) {
    // 올바른 문자열인 경우
    if (isCorrect(arr)) {
      answer++;
    }

    // 왼쪽으로 이동
    const value = arr.shift();
    arr.push(value);
  }

  return answer;
}
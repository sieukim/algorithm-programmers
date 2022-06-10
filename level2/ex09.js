function solution(s){
  // 여는 괄호의 개수
  const n = s.split('').filter(value => value === '(').length;
  // 닫는 괄호의 개수
  const m = s.split('').filter(value => value === ')').length;
  
  // 두 괄호의 길이가 다른 경우
  if (n !== m) {
      return false;
  }
  
  const stack = [];
  
  // 문자열을 탐색하며 (이 나오면 스택에 push 아니면 pop
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          stack.push(s[i]);
      } else {
          stack.pop();
      }
  }
  
  // stack에 남은 요소가 있으면 false를, 없으면 true를 반환
  return stack.length === 0;
}
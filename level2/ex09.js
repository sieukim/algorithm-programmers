function solution(s){
  // 문자열의 길이가 홀수인 경우 false를 반환
  if (s.length % 2 === 1) return false;

  const stack = [];

  // 문자열을 탐색하며 (이 나오면 스택에 push 아니면 pop
  s.split('').forEach(v => {
    v === '(' ? stack.push(v) : stack.pop();
  })

  // stack에 남은 요소가 있으면 false를, 없으면 true를 반환
  return stack.length > 0 ? false : true;
}
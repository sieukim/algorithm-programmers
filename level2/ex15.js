function solution(s) {
  // 길이가 홀수 => 절대 불가능
  if (s.length % 2 === 1) {
      return 0;
  }
  
  // 스택
  const stack = [];
  
  for (let i = 0; i < s.length; i++) {
      // 짝인 경우
      if (stack[stack.length - 1] === s[i]) {
          stack.pop();
      }
      // 짝이 아닌 경우
      else {
          stack.push(s[i]);
      }
  }
  
  return stack.length === 0 ? 1 : 0;
}
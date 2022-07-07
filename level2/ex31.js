// 올바른 괄호 문자열 확인 함수
function check(s) {
  const stack = [];
  const dict = {')': '(', ']': '[', '}': '{'};

  for (const value of s) {
      if (['(', '[', '{'].includes(value)) {
          stack.push(value);
      } else if (stack.length === 0) {
          return false;   
      } else if (stack[stack.length - 1] === dict[value]) {
          stack.pop();
      }
  }
  
  return stack.length === 0;
}

function solution(s) {
  let answer = 0;
  
  // 왼쪽으로 i칸만큼 회전
  for (let i = 0; i < s.length; i++) {
      if (check(s)) {
          answer += 1;
      } 
      s = s.slice(1) + s[0];
  }
  
  return answer;
}
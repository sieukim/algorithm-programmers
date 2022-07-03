// 균형잡힌 괄호 문자열 확인 함수
function isBalanced(arr) {
  const arr1 = arr.filter(value => value === '(');
  const arr2 = arr.filter(value => value === ')');
  
  return arr1.length === arr2.length;
}

// 올바른 괄호 문자열 확인 함수
function isCorrect(arr) {
  const stack = [];
  
  for (const value of arr) {
      if (value === '(') {
          stack.push(value);
      } else {
          stack.pop();
      }
  }
  
  return stack.length === 0;
}

// 주어진 문자열을 두 균형잡힌 괄호 문자열로 분리하는 함수
function split(arr) {
  for (let i = 0; i < arr.length; i++) {
      const u = arr.slice(0, i + 1);
      const v = arr.slice(i + 1);
      
      if (isBalanced(u)) {
          return [u, v]
      }
  }
}

// 주어진 문자열의 괄호 방향을 뒤집어 반환하는 함수
function reverse(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '(') {
          arr[i] = ')';
      } else {
          arr[i] = '(';
      }
  }
  
  return arr;
}

// 균형잡힌 괄호 문자열 -> 올바른 괄호 문자열 변환 함수
function convert(w) {
  if (w.length === 0) {
      return w;
  }
  
  const [u, v] = split(w);
  
  if (isCorrect(u)) {
      return [...u, ...convert(v)].join('');
  } else {
      return ['(', ...convert(v), ...')', ...reverse(u).slice(1, -1)].join('');
  }
}

function solution(p) {
  return convert(p.split(''));
}

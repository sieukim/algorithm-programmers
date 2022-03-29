function solution(p) {
  // 균형잡힌 괄호 문자열인지 판단하는 함수
  function isBalanced(string) {
    const left = string.split('').filter(value => value === '(');
    const right = string.split('').filter(value => value === ')');

    return left.length === right.length;
  }

  // 올바른 괄호 문자열인지 판단하는 함수
  function isCorrect(string) {
    // 균형잡힌 괄호 문자열이 아닌 경우
    if (!isBalanced(string)) return false;

    const stack = [];

    string.split('').forEach(value => {
      if (value === '(') stack.push(value);
      else stack.pop();
    });

    return stack.length === 0;
  }

  // 문자열 w를 두 균형잡힌 괄호 문자열 u, v로 분리하는 함수
  function getBalanced(w) {
    const u = [];
    const v = [...w.split('')];

    let i = 0;

    while (true) {
      const value = v.shift();
      u.push(value);
      if (isBalanced(u.join(''))) break;
    }

    return [u.join(''), v.join('')];
  }

  // 문자열 내 모든 괄호의 방향을 뒤집는 함수
  function reverse(string) {
    return string.split('').map(value => value === '(' ? ')' : '(').join('');
  }

  // 균형잡힌 괄호 문자열 w를 올바른 괄호 문자열로 변환하는 재귀 함수
  function convert(w) {
    // 1. 입력이 빈 문자열인 경우
    if (w.length === 0) {
      // 빈 문자열을 반환
      return w;
    }

    // 2. 문자열 w를 두 '균형잡힌 괄호 문자열' u, v로 분리
    const [u, v] = getBalanced(w);

    // 3. 문자열 u가 올바른 괄호 문자열인 경우
    if (isCorrect(u)) {
      // 3. 문자열 v에 대해 1단계부터 다시 수행
      let result = convert(v);
      // 3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환
      result = u + result;
      return result;
    }
    // 4. 문자열 u가 올바른 괄호 문자열이 아닌 경우
    else {
      // 4-1. 빈 문자열에 첫 번째 문자로 '('를 붙임
      let result = '(';
      // 4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙임
      result = result + convert(v);
      // 4-3. ')'를 이어 붙임
      result = result + ')';
      // 4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙임
      result = result + reverse(u.slice(1, u.length - 1));
      // 4-5. 생성된 문자열을 반환
      return result;
    }
  }

  // 입력이 빈 문자열인 경우 빈 문자열을 반환
  if (p.length === 0) return '';

  // 입력이 올바른 문자열인 경우 해당 입력 문자열을 반환
  if (isCorrect(p)) return p;

  return convert(p);
}
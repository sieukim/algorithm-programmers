function solution(s) {
  let answer = '';

  const n = s.length;
  const centerIndex = parseInt(n / 2);

  if (n % 2) answer += s[centerIndex];
  else answer += s[centerIndex - 1] + s[centerIndex];

  return answer;
}
function solution(s) {
  const sign = s.substring(0, 1);
  const number = sign === '-' ? parseInt(s.substring(1, s.length)) * -1 : parseInt(s);

  return number;
}
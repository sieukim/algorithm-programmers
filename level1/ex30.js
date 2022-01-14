function solution(x) {
  const sum = x.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
  return x % sum === 0 ? true : false;
}
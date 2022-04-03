function solution(n) {
  return n.toString().split('').reverse().map(value => parseInt(value));
}
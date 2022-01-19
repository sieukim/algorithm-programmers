function solution(s) {
  // 공백을 기준으로 나누고 오름차순 정렬
  const arr = s.split(" ").sort((a, b) => a - b);

  return `${arr[0]} ${arr[arr.length - 1]}`;
}
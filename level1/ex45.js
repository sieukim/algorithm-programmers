function solution(strings, n) {
  // 사전식 정렬
  strings.sort();
  
  // 조건 정렬
  strings.sort((a, b) => {
      if (a[n] > b[n]) return 1;
      else if (a[n] === b[n]) return 0;
      else return -1;
  })

  return strings;
}
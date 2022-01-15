function solution(strings, n) {
  // 사전식 정렬
  strings.sort();

  // 조건 정렬
  strings.sort((a, b) => {
    const arrA = a.split('');
    const arrB = b.split('');

    if (arrA[n] > arrB[n]) return 1;
    else if (arrA[n] === arrB[n]) return 0;
    else return -1;
  })

  return strings;
}
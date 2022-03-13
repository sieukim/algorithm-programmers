function solution(n, left, right) {
  // 1차원 배열 내 위치(인덱스) k를 n x n 크기의 2차원 배열 내 위치(인덱스) (i, j)를 변환하는 함수
  function convertIndex(n, k) {
    const i = parseInt(k / n);
    const j = k % n;

    return [i, j];
  }

  // 1차원 배열 내 위치(인덱스) left부터 right까지를 n x n 크기의 2차원 배열 내 위치(인덱스)로 변환하는 함수
  function convertIndexAll(n, left, right) {
    const indexArr = [];

    for (let i = left; i <= right; i++) {
      indexArr.push(convertIndex(n, i));
    }

    return indexArr;
  }

  // (k-1)행 (k-1)열부터 k행 k열까지의 영역이 k로 초기화된 n x n 크기의 2차원 배열 내 i행 j열의 값을 반환하는 함수
  function findValue(arr, i, j) {
    // 행이 열 이상인 경우
    if (i >= j) return i + 1;
    // 행이 열보다 작은 경우
    if (i < j) return j + 1;
  }

  const indexArr = convertIndexAll(n, left, right);
  const valueArr = [];

  indexArr.forEach(index => {
    const value = findValue(indexArr, index[0], index[1]);
    valueArr.push(value);
  });

  return valueArr;
}
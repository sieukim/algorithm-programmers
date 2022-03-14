function solution(arr) {
  // 초기 0와 1의 개수를 반환하는 함수
  function initialValues(arr, n) {
    // 0의 개수
    let count_zero = 0;
    // 1의 개수
    let count_one = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        arr[i][j] === 0 ? count_zero++ : count_one++;
      }
    }

    return [count_zero, count_one];
  }

  // 배열 내 모든 요소가 같은 값인 경우 그 값과 개수를 반환하는 함수
  function sameValues(arr, n, startRow = 0, startColumn = 0) {
    // 같은 값인지 확인하기 위한 기준 값
    const value = arr[startRow][startColumn];

    for (let i = startRow; i < startRow + n; i++) {
      for (let j = startColumn; j < startColumn + n; j++) {
        // 다른 값이 존재하는 경우
        if (arr[i][j] !== value) {
          return [-1, -1];
        }
      }
    }

    return [value, n * n];
  }

  // 쿼드 압축 실행 함수
  function quardCompress(arr, n, startRow = 0, startColumn = 0) {
    // 현재 영역에서 모든 요소가 같은 값인지 확인
    const [value, count] = sameValues(arr, n, startRow, startColumn);

    // 0과 1의 개수 갱신
    if (value === 0) {
      count_zero -= count - 1;
    } else if (value === 1) {
      count_one -= count - 1;
    }

    // n 값 갱신
    n /= 2;

    // 더 이상 압축할 필요가 없는 경우
    if (n === 1 || value !== -1) {
      return;
    }

    // 좌측 상단 영역
    quardCompress(arr, n, startRow, startColumn);
    // 좌측 하단 영역
    quardCompress(arr, n, startRow + n, startColumn);
    // 우측 상단 영역
    quardCompress(arr, n, startRow, startColumn + n);
    // 우측 하단 영역
    quardCompress(arr, n, startRow + n, startColumn + n);
  }

  const n = arr.length;
  let [count_zero, count_one] = initialValues(arr, n);

  // 쿼드 압축 실행
  quardCompress(arr, n, 0, 0);

  return [count_zero, count_one];
}
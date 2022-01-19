function solution(arr) {
  // 두 수간의 최소 공배수 찾는 함수
  function minimumMultiple(a, b) {
    let multipleA = 1;
    let multipleB = 1;

    while (a * multipleA !== b * multipleB) {
      if (a * multipleA < b * multipleB) {
        multipleA++;
      } else {
        multipleB++;
      }
    }

    return a * multipleA;
  }

  return arr.reduce((a, b) => minimumMultiple(a, b));
}
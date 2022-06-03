function solution(arr1, arr2) {    
  // 크기가 같은 두 일차원 배열의 동일한 위치의 
  // 요소를 모두 곱하고 더한 값을 반환하는 함수 
  function get_sum(x, y) {
      let sum = 0;
      
      for (let i = 0; i < x.length; i++) {
          sum += x[i] * y[i];
      }
      
      return sum;
  }
  
  // 결과 행렬의 크기 n x m
  const n = arr1.length;
  const m = arr2[0].length;
  // 결과 행렬
  const result = Array.from(new Array(n), () => new Array(m).fill(0));
  
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          // arr1의 i번째 행, 크기 k
          const x = arr1[i]
          // arr2의 j번째 열, 크기 k
          const y = arr2.map(value => value[j]);
          // result[i][j]: x와 y의 각 요소의 곱을 합한 값
          result[i][j] = get_sum(x, y);
      }
  }
  
  return result;
}
function solution(n, arr1, arr2) {
  // 맵 변환 함수
  function toMap(n, arr) {
      return arr.map(row => {
          // 이진수 배열로 변환
          const binary = row.toString(2).split('');
          // 길이가 n이 될 때까지 맨 앞에 0 추가
          while (binary.length < n) {
              binary.unshift(0);
          }
          // 길이가 n인 이진수 배열 반환
          return binary;
      });
  }
  
  const map1 = toMap(n, arr1);
  const map2 = toMap(n, arr2);

  const map = [];
  
  for (let i = 0; i < n; i++) {
      let row = '';
      
      for (let j = 0; j < n; j++) {
          // 둘 중 하나가 1(#)인 경우
          if (map1[i][j] === '1' || map2[i][j] === '1') {
              // # 추가
              row += '#';
          }
          // 둘 다 1(#)이 아닌 경우
          else {
              row += ' ';
          }
      }
      map.push(row);
  }
  
  return map;
}
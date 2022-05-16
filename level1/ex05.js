// 주어진 2차원 배열의 열 정보를 반환하는 함수
function getColumns(arr) {
  // 배열의 크기
  const n = arr.length;
  // 열 정보 
  const columns = Array.from({length: n}, () => []);

  for (let j = 0; j < n; j++) {
      for (let i = 0; i < n; i++) {
          // 0이 아닌 경우에만 추가
          if (arr[i][j] !== 0) {
              columns[j].push(arr[i][j]);
          }
      }
  }
  
  return columns;
}

function solution(board, moves) {
  // board 크기
  const n = board.length;
  // board 열 정보
  const columns = getColumns(board);

  // 바구니 정보
  const bucket = [];
  // 사라진 인형 개수
  let count = 0;
  
  for (const move of moves) {
      // 최상단 인형 선택
      const selected = columns[move - 1].shift();
      
      // 인형이 없는 경우
      if (!selected) {
          // 건너뜀
          continue;
      }
      
      // 같은 인형이 들어가는 경우
      if (selected === bucket.slice(-1)[0]) {
          // 마지막 인형 제거
          bucket.pop();
          // 사라진 인형 개수 추가
          count += 2;
      }
      // 다른 인형이 들어가는 경우
      else {
          // 인형 추가
          bucket.push(selected);
      }
  }
  
  return count;
}
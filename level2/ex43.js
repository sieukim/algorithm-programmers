// 지원자 위치 반환 함수
function getIndex(place, n=5) {
  const index = [];
  
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          if (place[i][j] === 'P') {
              index.push([i, j]);
          }
      }
  }
  
  return index;
}

// 두 사람 간의 거리두기 지킴 여부 확인 함수
function check(place, index1, index2) {
  // 맨해튼 거리 확인
  let [r1, c1] = index1;
  let [r2, c2] = index2;
  
  const distance = Math.abs(r1 - r2) + Math.abs(c1 - c2);
  
  if (distance > 2) {
      return true;
  }
  if (distance === 1) {
      return false;
  }
  
  // 파티션 여부 확인
  r1 = Math.min(index1[0], index2[0])
  r2 = Math.max(index1[0], index2[0])
  c1 = Math.min(index1[1], index2[1])
  c2 = Math.max(index1[1], index2[1])
  
  for (let i = r1; i <= r2; i++) {
      for (let j = c1; j <= c2; j++) {
          if (place[i][j] === 'O') {
              return false;
          }
      }
  }
  
  return true;
}

// 거리두기 지킴 여부 확인 함수 
function check_all(place) {
  const index = getIndex(place);
  
  for (let i = 0; i < index.length; i++) {
      for (let j = i + 1; j < index.length; j++) {
          if (!check(place, index[i], index[j])) {
              return 0;
          }
      }
  }
  
  return 1;
}

function solution(places) {
  const answer = [];
  
  for (let place of places) {
      answer.push(check_all(place));
  }
  
  return answer;
}
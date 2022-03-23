function solution(places) {
  // 맨허튼 거리 측정 함수
  function getDistance(a, b) {
    return Math.abs(a.row - b.row) + Math.abs(a.column - b.column);
  }

  // 응시자 좌표(행, 열) 배열 반환하는 함수
  function getApplicants(place, rows = 5, columns = 5) {
    const arr = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (place[i][j] === 'P') {
          arr.push({
            row: i,
            column: j,
          });
        }
      }
    }

    return arr;
  }

  // 응시자 좌표 배열을 이용하여 거리두기 현황을 반환하는 함수
  function check(place, applicants, rows = 5, columns = 5) {
    // 응시자 수
    const n = applicants.length;

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        // 맨허튼 거리
        const distance = getDistance(applicants[i], applicants[j]);
        // 맨허튼 거리가 2보다 큰 경우 => 거리 두기 무조건 지킨 경우
        if (distance > 2) continue;

        // 맨허튼 거리가 2인 경우
        if (distance === 2) {
          // 지원자 좌표 정보
          const {row: row1, column: column1} = applicants[i];
          const {row: row2, column: column2} = applicants[j];

          // 두 지원자가 같은 행 또는 열에 위치한 경우
          if (row1 === row2 || column1 === column2) {
            // 두 지원자 사이 좌표
            const row = (row1 + row2) / 2;
            const column = (column1 + column2) / 2;

            // 벽이 없는 경우 => 거리 두기 못 지킨 경우
            if (place[row][column] === 'O') return false;
          }
          // 두 지원자가 다른 행, 열에 존재하는 경우
          else {
            // 벽이 없는 경우 => 거리 두기 못 지킨 경우
            if (place[row1][column2] === 'O') return false;
            if (place[row2][column1] === 'O') return false;
          }
        }

        // 맨허튼 거리가 1인 경우 => 거리 두기 무조건 못 지킨 경우
        if (distance === 1) return false;
      }
    }

    return true;
  }

  const answer = [];

  places.forEach(place => {
    const applicants = getApplicants(place);
    check(place, applicants) ? answer.push(1) : answer.push(0);
  });

  return answer;
}
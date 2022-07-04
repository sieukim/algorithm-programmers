// 파일명 split 함수
function split(file) {
  const head = file.match(/[A-Z \.\-]+/)[0];
  const number = file.match(/[0-9]+/)[0];
  return [head, number];
}

// 정렬 비교 함수 
function comparator(x, y) {
  if (x[0][0] > y[0][0]) {
      return 1;
  } else if (x[0][0] < y[0][0]) {
      return -1;
  } else {
      return x[0][1] - y[0][1];
  }
}

function solution(files) {
  // 매핑 
  const new_files = files.map((file, i) => [split(file.toUpperCase()), i]);
  // 정렬
  new_files.sort((x, y) => comparator(x, y));
  // 매핑
  const answer = new_files.map(file => files[file[1]]);

  return answer;
}
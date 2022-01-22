function solution(files) {
  const arr = [];

  const headRegex = /[a-zA-Z\-\.\s]+/;
  const numberRegex = /[0-9]+/;

  // number 파싱
  files.forEach(file => {
    const head = headRegex.exec(file)[0].toLowerCase();
    const number = parseInt(numberRegex.exec(file)[0]);
    arr.push([file, head, number])
  });

  arr.sort((a, b) => {
    // head 사전식 정렬
    if (a[1] > b[1]) return 1;
    else if (a[1] < b[1]) return -1;
    // number 오름차순 정렬
    else return a[2] - b[2];
  });

  return arr.map(file => file[0]);
}
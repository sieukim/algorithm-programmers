function solution(s) {
  // '},' 을 기준으로 분리
  const arr = s.split('},').map(value => {
    // '{', '}', ',' 을 기준으로 분리
    const splited = value.split(/[{},]/);
    // 빈 문자 제거
    return splited.filter(str => str !== '');
  });

  // 요소의 개수를 기준으로 오름차순 정렬
  arr.sort((a, b) => a.length - b.length);

  let answer = [];

  // 요소의 개수가 낮은 집합부터 순회하며 튜플의 요소 찾기
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const element = parseInt(arr[i][j]);

      if (!answer.includes(element)) {
        answer.push(element);
      }
    }
  }

  return answer;
}
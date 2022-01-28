function solution(citations) {
  let hIndex = '';

  // 총 논문 편수
  const n = citations.length;

  // 인용 횟수를 기준으로 내림차순 정렬
  citations.sort((a, b) => b - a);

  // 최대 논문 인용 횟수
  const maxQuoted = citations[0];

  // h를 최대 논문 인용 횟수부터 0까지 1씩 감소시키며 조건에 부합하는지 탐색
  for (let h = maxQuoted; h >= 0; h--) {
    // 인용 횟수를 순회하며 h번 이상 인용된 논문의 수 찾기
    let count = 0;

    for (const citation of citations) {
      if (citation >= h) count++;
      else break;
    }

    // 논문의 수가 h편 이상이면 탐색 종료
    if (count >= h) {
      hIndex = h;
      break;
    }
  }

  return hIndex;
}
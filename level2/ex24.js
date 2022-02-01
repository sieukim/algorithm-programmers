function solution(priorities, location) {
  let count = 0;

  // 모든 우선순위를 { 우선순위, 위치 }의 형태로 매핑
  const papers = priorities.map((value, index) => ({ priority: value, location: index }));

  while (papers.length > 0) {
    const paper = papers.shift();
    // 문서가 인쇄됐는지 판별
    let printed = true;

    // 더 중요한 문서가 있는지 확인

    for (let i = 0; i < papers.length; i++) {
      if (paper.priority < papers[i].priority) {
        papers.push(paper);
        printed = false;
        break;
      }
    }

    // 인쇄 수 카운팅
    if (printed) count++;

    // 원하는 위치의 문서를 인쇄한 경우
    if (printed && paper.location === location) {
      break;
    }
  }

  return count;
}
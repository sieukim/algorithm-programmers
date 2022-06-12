function solution(citations) {
  let answer = -1;

  // 인용횟수를 기준으로 내림차순 정렬
  citations.sort((a, b) => b - a);
  
  for (let h = citations[0]; h >= 0; h--) {
      // h번 이상 인용된 논문 수
      const count = citations.filter(value => value >= h).length;
      
      // h번 이상 인용된 논문이 h편 이상인 경우
      if (count >= h) {
          answer = h;
          break;
      }
  }

  return answer;
}
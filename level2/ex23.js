function solution(s) {
  const answer = [];
  
  // 전처리
  const subsets = s.split('},').map(value => value.replace(/\{|\}/g, '').split(','));
  
  // 원소 개수를 기준으로 오름차순 정렬
  subsets.sort((a, b) => a.length - b.length);
  
  for (const subset of subsets) {
      for (const value of subset) {
          if (answer.includes(value)) {
              continue;
          }
          answer.push(value);
      }
  }
  
  // 문자열 => 정수 
  return answer.map(value => parseInt(value));
}
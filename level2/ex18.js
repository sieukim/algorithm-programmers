function solution(brown, yellow) {
  const answer = [];

  // 전체 카펫 넓이 = 갈색 격자 수 + 노랑 격자 수 
  const area = brown + yellow
  
  // 정수 길이 탐색
  for (let i = 1; i <= Math.sqrt(area); i++) {
      // 가로, 세로
      const width = area / i;
      const height = i;
      
      // 갈색 격자 수 = 2 * (width + height) - 4
      if (brown !== 2 * (width + height) - 4) {
          continue;
      }
      // 노랑 격자 수 = (width - 2) * (height - 2)
      if (yellow !== (width - 2) * (height - 2)) {
          continue;
      }
      // 조건에 맞는 경우
      answer.push(width);
      answer.push(height);
      break;
  }

  return answer;
}
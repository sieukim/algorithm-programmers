function solution(infos) {
  // {의상 종류: [의상 수]}
  const obj = {};
  
  for (const info of infos) {
      // 의상 이름, 의상 종류
      const [_, type] = info;
      
      // 의상 종류가 존재하는 경우
      if (obj[type]) {
          // 의상 수 추가 
          obj[type] += 1;
      }
      // 의상 종류가 존재하지 않는 경우
      else {
          // 의상 종류 추가
          obj[type] = 1;
      }
  }
  
  // 조합의 수
  const count = Object.values(obj).reduce((a, b) => a * (b + 1), 1);
  
  // 0개 조합은 제외 
  return count - 1; 
}
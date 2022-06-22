function solution(skillOrder, skillTrees) {
  let answer = 0;
  
  // 문자열 => 배열
  skillOrder = skillOrder.split('');
  
  for (const skillTree of skillTrees) {
      // 스킬 위치
      const index = skillOrder.map(value => skillTree.indexOf(value))
                              .map(value => value === -1 ? 26 : value);
      
      // 가능 여부
      let possible = true;
      
      // 순서 확인 
      for (let i = 0; i < index.length; i++) {
          // 잘못된 순서인 경우
          if (index[i] > index[i + 1]) {
              possible = false;
              break;
          }
      }

      // 가능한 순서인 경우
      if (possible) {
          answer++;
      }
  }
  
  return answer;
}
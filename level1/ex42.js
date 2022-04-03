function solution(s){
  let count_p = 0;
  let count_y = 0;
  
  // 소문자 문자열로 변환
  s = s.toLowerCase();
  
  // p와 y의 개수 세기
  s.split('').forEach(alpha => {
      if (alpha === 'p') count_p++;
      if (alpha === 'y') count_y++;
  })
  
  return count_p === count_y
}
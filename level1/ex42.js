function solution(s){
  let count_p = 0;
  let count_y = 0;

  // p와 y의 개수 세기
  s.split('').forEach(alpha => {
    if (alpha.toLowerCase() === 'p') count_p++;
    if (alpha.toLowerCase() === 'y') count_y++;
  })

  if (count_p === count_y) return true;
  else return false;

}
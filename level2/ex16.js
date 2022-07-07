// 이진 변환 함수
function convert(s, times=0, count=0) {
  if (s === '1') {
      return [times, count];
  }
  
  const n = s.length;
  const m = s.split('').filter(value => value === '0').length;
  s = (n - m).toString(2);
  
  return convert(s, times + 1, count + m);
}

function solution(s) {
  return convert(s);
}
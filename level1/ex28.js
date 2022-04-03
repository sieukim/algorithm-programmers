function solution(num) {
  let answer = -1;
  
  function getCount(num, count = 0) {
      if (num === 1 || count >= 500) {
          answer = count;
          return;
      }
      // step1
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
      // step2
      getCount(num, count + 1);
  }
  
  getCount(num, 0);
  
  return answer < 500 ? answer : -1;
}
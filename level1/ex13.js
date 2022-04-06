function solution(n, lost, reserve) {
  // 학생 배열 (체육복 수), students[0]은 사용 x
  const students = new Array(n + 1).fill(1);
  
  // 도난
  for (const student of lost) {
      students[student]--;
  }
  
  // 여분
  for (const student of reserve) {
      students[student]++;
  }
  
  // 대여
  for (let i = 1; i <= n; i++) {
      // 체육복이 없을 때
      if (students[i] === 0) {
          // 앞 학생이 여벌을 가진 경우
          if (students[i - 1] === 2) {
              students[i - 1] = 1;
              students[i] = 1;
          }
          // 뒷 학생이 여벌을 가진 경우
          else if (students[i + 1] === 2) {
              students[i + 1] = 1;
              students[i] = 1;
          }
      }
  }
  
  return n - students.filter(student => student === 0).length;
}
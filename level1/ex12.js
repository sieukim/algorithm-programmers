function solution(answers) {
  // 점수 반환 함수
  function getScore(answers, pattern) {
      // 점수
      let score = 0;
      // 패턴 인덱스
      let index = 0;
      
      for (let i = 0; i < answers.length; i++) {
          // 정답인 경우
          if (answers[i] === pattern[index]) {
              score++;
          }
          
          // 패턴 인덱스 갱신
          index = (index + 1) % pattern.length;
      }
      
      return score;
  }
  
  // 수포자 셋..
  const students = {
      student1: {
          pattern: [1, 2, 3, 4, 5],
          score: 0,
          number: 1,
      }, 
      student2: {
          pattern: [2, 1, 2, 3, 2, 4, 2, 5],
          score: 0,
          number: 2,
      },
      student3: {
          pattern: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
          score: 0,
          number: 3,
      },
  }

  // 최대 점수 
  let maxScore = 0;
  
  // 점수 계산
  for (const student in students) {
      students[student].score = getScore(answers, students[student].pattern);
      maxScore = Math.max(maxScore, students[student].score);
  }

  // 최대 점수 수포자 배열
  const answer = [];
  
  for (const student in students) {
      // 최대 점수인 경우
      if (students[student].score === maxScore) {
          answer.push(students[student].number);
      }
  }
  
  return answer;
}
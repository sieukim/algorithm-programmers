function solution(answers) {
  const answer = [];

  // 수포자가 찍는 방식
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 점수 계산 함수
  function calculateScore(answers, student) {
    // 수포자가 찍는 방식 패턴의 길이와 정답의 길이가 다르므로 별개의 인덱스를 둔다.
    let studentIndex = 0;
    // 수포자 점수
    let studentScore = 0;

    // 서로 비교하여 맞는 개수를 센다.
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === student[studentIndex]) studentScore++;
      if (studentIndex + 1 === student.length) studentIndex = 0;
      else studentIndex++;
    }
    return studentScore;
  }

  const studentsScore = [];

  studentsScore.push(calculateScore(answers, student1));
  studentsScore.push(calculateScore(answers, student2));
  studentsScore.push(calculateScore(answers, student3));

  // 점수 최대값
  const maxScore = studentsScore.reduce((a, b) => Math.max(a, b));

  // 점수 최대값과 같은 학생을 정답 배열에 푸쉬
  for (let i = 0; i < studentsScore.length; i++) {
    if (studentsScore[i] === maxScore) answer.push(i + 1);
  }

  return answer;
}
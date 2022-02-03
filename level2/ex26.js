function solution(progresses, speeds) {
  const answer = [];

  while (progresses.length > 0) {
    progresses = progresses.map((progress, index) => progress + speeds[index]);

    // 맨 앞 기능이 배포가능한 경우
    if (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();

      // 추가적으로 배포가능한 기능의 수 카운팅
      let count = 1;

      while (true) {
        if (progresses[0] >= 100) {
          progresses.shift();
          speeds.shift();
          count++;
        } else {
          break;
        }
      }

      answer.push(count);
    }
  }

  return answer;
}
function solution(participant, completion) {
  let answer = '';

  participant.sort();
  completion.sort();

  const n = participant.length;

  for (let i = 0; i < n; i++) {
    if (completion[i] !== participant[i]) {
      answer = participant[i];
      break;
    }
  }

  return answer;
}
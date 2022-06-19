function solution(n, words) {
  const answer = [];
  
  // 이전 단어의 마지막 글자
  let prev = words[0][0];
  
  for (let i = 1; i < words.length; i++) {
      // 이전 단어
      const prev = words[i - 1];
      // 현재 단어
      const curr = words[i];

      // 탈락
      if (words.slice(0, i).includes(curr) || prev.slice(-1) !== curr[0]) {
          answer.push(i % n + 1);
          answer.push(Math.ceil((i + 1) / n));
          break;
      }
  }

  return answer.length === 0 ? [0, 0] : answer;
}
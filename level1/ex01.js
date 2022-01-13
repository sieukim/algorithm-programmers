function solution(lottos, win_nums) {
  const answer = [];

  let lottos_miss = 0;

  // 0 개수 세기
  lottos.forEach(value => {
    if (value === 0) lottos_miss++
  });

  let lottos_hits = 0;

  // 0이 아닌 번호 중 맞은 개수 세기
  lottos.forEach(value => {
    if (value !== 0 && win_nums.includes(value)) lottos_hits++;
  })

  function rank(hits) {
    if (hits <= 1) return 6;
    else return 6 - hits + 1;
  }

  answer.push(rank(lottos_hits + lottos_miss));
  answer.push(rank(lottos_hits));

  return answer;
}
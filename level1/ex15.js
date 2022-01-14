function solution(N, stages) {
  const answer = [];

  const players = [];

  for (let i = 0; i < N + 1; i++) {
    players.push({level: i + 1, reached: 0, solved: 0});
  }

  for (let i = 0; i < stages.length; i++) {
    const level = stages[i];

    for (let j = 0; j < level; j++) {
      players[j].reached++;
    }
    players[level - 1].solved++;
  }

  for (let i = 0; i < N + 1; i++) {
    players[i].failRate = players[i].reached !== 0 ? players[i].solved / players[i].reached : 0;
  }

  // (N + 1) level의 경우 마지막 스테이지까지 클리어 한 사용자를 나타낼 뿐 유효한 스테이지가 아니므로 삭제한다.
  players.pop();

  players.sort((a, b) => {
    // 실패율 내림차순 정렬
    if (a.failRate > b.failRate) {
      return b.failRate - a.failRate;
    }
    // 실패율이 같은 경우 스테이지 번호 오름차순 정렬
    if (a.failRate === b.failRate) {
      return a.level - b.level;
    }
  })

  for (let i = 0; i < players.length; i++) {
    answer.push(players[i].level);
  }

  return answer;
}
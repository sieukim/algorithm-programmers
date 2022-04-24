function solution(N, stages) {
  // i번 스테이지 실패율 반환 함수
  function getFailureRate(reached, i) {
      // i번 스테이지 도달 && 클리어 x 사용자 수
      const failurePlayers = reached[i];
      // i번 스테이지 도달 사용자 수
      const reachedPlayers = reached.slice(i).reduce((a, b) => a + b);
      
      // 도달 유저가 없는 경우
      if (reachedPlayers === 0) {
          // 실패율 = 0
          return 0;
      }
      
      return failurePlayers / reachedPlayers;
  }
  
  // reached[i]: i번 스테이지 도달 사용자 수
  // reached[0] = 0, reached[N + 1] = 모든 스테이지 클리어한 사용자 수
  const reached = new Array(N + 2).fill(0);
  
  // reached 초기화
  stages.forEach(value => reached[value]++);
  
  // [스테이지 번호, 실패율] 배열, 0번과 N + 1번 제거
  const info = reached.map((_, index) => [index, getFailureRate(reached, index)]).slice(1, N + 1);
  
  // 실패율을 기준으로 내림차순 정렬
  info.sort((a, b) => b[1] - a[1]);

  // 스테이지 번호 배열 반환
  return info.map(value => value[0]);
}
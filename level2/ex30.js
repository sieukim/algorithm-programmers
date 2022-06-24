function solution(dirs) {
  // 현재 좌표
  let [x, y] = [0, 0];
  // 이동 경로 set
  const routes = new Set();
  // (x좌표 이동량, y좌표 이동량)
  const moves = {'U': [0, 1], 'D': [0, -1], 'R': [1, 0], 'L': [-1, 0]};
  
  for (const value of dirs) {
      // 이동량
      const move = moves[value];
      // 다음 좌표
      const [nx, ny] = [x + move[0], y + move[1]];

      // 이동 가능한 경우
      if (Math.abs(nx) <= 5 && Math.abs(ny) <= 5) {
          // 순방향 경로 추가
          routes.add(`${x} ${y} ${nx} ${ny}`);
          // 역방향 경로 추가
          routes.add(`${nx} ${ny} ${x} ${y}`);
          // 좌표 갱신
          x = nx;
          y = ny;
      }
  }

  return routes.size / 2;
}
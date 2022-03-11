function solution(dirs) {
  // 이동 방향 집합
  const directions = dirs.split('');

  // 경로 집합
  const routes = [];

  // 이전 좌표
  const prevPoint = {x: 0, y: 0};
  // 다음 좌표
  const nextPoint = {x: 0, y: 0};

  directions.forEach(direction => {
    let moved = false;

    // 명령에 따른 좌표 이동
    if (prevPoint.y < 5 && direction == 'U') nextPoint.y = prevPoint.y + 1;
    if (prevPoint.y > -5 && direction == 'D') nextPoint.y = prevPoint.y - 1;
    if (prevPoint.x < 5 && direction == 'R') nextPoint.x = prevPoint.x + 1;
    if (prevPoint.x > -5 && direction == 'L') nextPoint.x = prevPoint.x - 1;

    // 좌표 이동을 한 경우
    if (prevPoint.x !== nextPoint.x || prevPoint.y !== nextPoint.y) {
      // 이동할 때 지나가는 경로
      const passed = {x: (prevPoint.x + nextPoint.x) / 2, y: (prevPoint.y + nextPoint.y) / 2};

      // 처음 간 경로인 경우
      if (routes.every(route => route.x !== passed.x || route.y !== passed.y)) {
        routes.push(passed);
      }
    }

    // 현재 좌표 갱신
    prevPoint.x = nextPoint.x;
    prevPoint.y = nextPoint.y;
  });

  return routes.length;
}
function solution(maps) {
    // n x m 지도
    const n = maps.length;
    const m = maps[0].length;
    // 큐 for bfs
    const q = [];
    q.push([0, 0, 1]);
    // 방문 좌표
    const visited = new Set();
    visited.add([0, 0].join(','));
    // 상하좌우 이동량
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    // (0, 0)으로부터의 최단 거리
    const FAILURE = 10000;
    const distance = Array.from({ length: n}, () => new Array(m).fill(FAILURE));

    while (q.length > 0) {
        // 탐색 좌표
        const [x, y, count] = q.shift();
        distance[x][y] = Math.min(distance[x][y], count);
        
        // 상하좌우 확인
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            // 범위 이탈
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                continue;
            } 
            // 방문한 경우
            if (visited.has([nx, ny].join(','))) {
                continue;
            }
            // 최단 경로가 아닌 경우
            if (count >= distance[nx][ny]) {
                continue;
            }
            // 경로 이동
            if (maps[nx][ny] === 1) {
                q.push([nx, ny, distance[x][y]+1]);
                visited.add([nx, ny].join(','));
            }
        }
    }

    if (distance[n-1][m-1] === FAILURE) {
        return -1;
    } else {
        return distance[n-1][m-1];
    }
}
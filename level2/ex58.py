from collections import deque

def solution(maps):
    # n x m 지도
    n, m = len(maps), len(maps[0])
    # 큐 for bfs
    q = deque()
    q.append((0, 0, 1))
    # 방문 좌표
    visited = set([(0, 0)])
    # 상하좌우 이동량
    dx = [0, 0, -1, 1]
    dy = [-1, 1, 0, 0]
    # (0, 0)으로부터의 최단 거리
    FAILURE = 10000
    distance = [[FAILURE] * m for _ in range(n)]
    
    while q:
        # 탐색 좌표
        x, y, count = q.popleft()
        distance[x][y] = min(distance[x][y], count)
        # 상하좌우 확인
        for i in range(4):
            nx, ny = x+dx[i], y+dy[i]
            # 범위 이탈
            if nx not in range(n) or ny not in range(m):
                continue
            # 방문한 경우
            if (nx, ny) in visited:
                continue
            # 최단 경로가 아닌 경우
            if count >= distance[nx][ny]:
                continue
            # 경로 이동
            if maps[nx][ny] == 1:
                q.append((nx, ny, distance[x][y]+1))
                visited.add((nx, ny))
    
    if distance[n-1][m-1] == FAILURE:
        return -1
    else:
        return distance[n-1][m-1]
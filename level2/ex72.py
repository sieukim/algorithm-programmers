from collections import deque

def solution(maps):
    # 특정 지점 좌표 반환
    def index(maps, value):
        return [(i, j) for i in range(len(maps)) for j in range(len(maps[0])) if maps[i][j] == value][0]
    
    # 최단 경로 탐색
    def find(maps, start, end):
        d = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        q = deque([(start[0], start[1], 1)])
        visited = [start]

        while q:
            x, y, count = q.popleft()
            for dx, dy in d:
                nx, ny = x+dx, y+dy
                if nx not in range(len(maps)):
                    continue
                if ny not in range(len(maps[0])):
                    continue
                if (nx, ny) in visited:
                    continue
                if maps[nx][ny] == 'X':
                    continue
                if (nx, ny) == end:
                    return count
                q.append((nx, ny, count+1))
                visited.append((nx, ny))

        return 0
        
    start = index(maps, 'S')
    mid = index(maps, 'L')
    end = index(maps, 'E')
    path1 = find(maps, start, mid)
    path2 = find(maps, mid, end)
    return path1+path2 if path1*path2 > 0 else -1
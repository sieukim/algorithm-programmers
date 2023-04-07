from collections import defaultdict

def solution(maps):
    # 유니온 파인드 활용
    def find(parent, x):
        if parent[x] != x:
            parent[x] = find(parent, parent[x])
        return parent[x]
    def union(parent, x, y):
        x, y = find(parent, x), find(parent, y)
        if x < y:
            parent[y] = x
        else:
            parent[x] = y

    # 최대 기간 계산
    def get_days(maps, parent):
        days = defaultdict(int)
        
        for (x, y) in parent:
            # 바다인 경우
            if maps[x][y] == 'X':
                continue
            # 루트 좌표
            nx, ny = find(parent, (x, y))
            days[str((nx, ny))] += int(maps[x][y])
            
        return sorted(days.values()) if days else [-1]
            
    # 지도 크기 
    n, m = len(maps), len(maps[0])
    # key: 좌표
    # value: 부모 좌표
    parent = {(i, j): (i, j) for i in range(n) for j in range(m)}
    
    for x in range(n):
        for y in range(m):
            # 바다인 경우
            if maps[x][y] == 'X':
                continue
            # 상하좌우 확인
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = x+dx, y+dy
                # 범위 확인
                if nx not in range(n):
                    continue
                if ny not in range(m):
                    continue
                # 같은 섬인 경우
                if maps[nx][ny] != 'X':
                    union(parent, (x, y), (nx, ny))
        
    return get_days(maps, parent)
    
    

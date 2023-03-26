import sys
sys.setrecursionlimit(10**6)

def solution(grid):
    # 위로 이동
    def up(n, x, y):
        return (x-1)%n, y
    
    # 아래로 이동
    def down(n, x, y):
        return (x+1)%n, y
    
    # 오른쪽 이동
    def right(m, x, y):
        return x, (y+1)%m
    
    # 왼쪽 이동
    def left(m, x, y):
        return x, (y-1)%m
    
    # 다음 위치 및 빛의 방향 반환
    # x, y: 현재 위치 
    # prev: 빛이 들어온 방향
    def get_next(grid, x, y, prev):
        n, m, val = len(grid), len(grid[0]), grid[x][y]
        
        if prev == 'U':
            if val == 'S':
                return down(n, x, y), 'U'
            elif val == 'R':
                return left(m, x, y), 'R'
            elif val == 'L':
                return right(m, x, y), 'L'
        elif prev == 'D':
            if val == 'S':
                return up(n, x, y), 'D'
            elif val == 'R':
                return right(m, x, y), 'L'
            elif val == 'L':
                return left(m, x, y), 'R'
        elif prev == 'R':
            if val == 'S':
                return left(m, x, y), 'R'
            elif val == 'R':
                return up(n, x, y), 'D'
            elif val == 'L':
                return down(n, x, y), 'U'
        elif prev == 'L':
            if val == 'S':
                return right(m, x, y), 'L'
            elif val == 'R':
                return down(n, x, y), 'U'
            elif val == 'L':
                return up(n, x, y), 'D'
    
    # 경로 탐색
    # grid: 격자 배열
    # x, y: 현재 좌표
    # prev: 빛이 들어온 방향
    def find(grid, x, y, prev, visited, cycle):
        # 경로 종료
        if (x, y, prev) in cycle:
            return cycles.append(cycle)
        # 중복 경로
        if (x, y, prev) in visited:
            return 
        else:
            visited.add((x, y, prev))
        # 재귀 호출
        (nx, ny), next = get_next(grid, x, y, prev)
        cycle.add((x, y, prev))
        find(grid, nx, ny, next, visited, cycle)
        
    n, m = len(grid), len(grid[0])
    visited = set()
    cycles = []
    
    for i in range(n):
        for j in range(m):
            for next in ['U', 'D', 'L', 'R']:
                find(grid, i, j, next, visited, set())
    
    return sorted([len(cycle) for cycle in cycles])
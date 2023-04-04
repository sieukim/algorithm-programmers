from collections import deque

def solution(board):
    # 다음 도달 위치 탐색
    def find(board, x, y):
        n, m = len(board), len(board[0])
        up, down, left, right = [0, y], [n-1, y], [x, 0], [x, m-1]
        # 상
        for i in range(x, -1, -1):
            if board[i][y] == 'D':
                up[0] = i+1
                break
        # 하
        for i in range(x+1, n):
            if board[i][y] == 'D':
                down[0] = i-1
                break
        # 좌
        for j in range(y, -1, -1):
            if board[x][j] == 'D':
                left[1] = j+1
                break
        # 우
        for j in range(y+1, m):
            if board[x][j] == 'D':
                right[1] = j-1
                break
        return [up, down, left, right]
    
    # 보드 크기
    n, m = len(board), len(board[0])
    # 시작 위치
    startX, startY = [(i, j) for i in range(n) for j in range(m) if board[i][j] == 'R'][0]
    # (x좌표, y좌표, 이동거리)
    q = deque([(startX, startY, 0)])
    # (x좌표, y좌표)
    visited = [(startX, startY)]
    
    while q:
        x, y, count = q.popleft()
        # 목표 위치에 도착 
        if board[x][y] == 'G':
            return count
        # 상하좌우 탐색
        for nx, ny in find(board, x, y):
            if (nx, ny) not in visited:
                q.append((nx, ny, count+1))
                visited.append((nx, ny))

    return -1


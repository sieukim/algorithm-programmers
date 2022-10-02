def solution(board):
    # board 크기
    n = len(board)
    # 이동량 (위, 아래, 좌, 우, 대각선)
    move = [
        (-1, 0),
        (1, 0),
        (0, -1),
        (0, 1),
        (-1, -1),
        (-1, 1),
        (1, -1),
        (1, 1),
    ]

    # 지뢰: 1, 위험 지역: -1, 안전 지역: 0
    for x in range(n):
        for y in range(n):
            if board[x][y] == 1:
                for dx, dy in move:
                    nx, ny = x+dx, y+dy
                    if nx not in range(n):
                        continue
                    if ny not in range(n):
                        continue
                    if board[nx][ny] == 1:
                        continue
                    board[nx][ny] = -1
                    
    # 안전 지역 개수 카운팅
    return sum([1 for x in range(n) for y in range(n) if board[x][y] == 0])
            
            
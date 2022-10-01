def solution(keyinput, board):
    move = {
        'up': [0, 1],
        'down': [0, -1],
        'left': [-1, 0],
        'right': [1, 0],
    }
    
    # board 범위
    n, m = (board[0]-1)//2, (board[1]-1)//2
    # 현재 좌표
    x, y = 0, 0
    
    for key in keyinput:
        # 이동량
        dx, dy = move[key]
        # 다음 좌표
        nx, ny = x+dx, y+dy
        # 범위 확인
        if nx not in range(-n, n+1):
            continue
        if ny not in range(-m, m+1):
            continue
        # 좌표 갱신
        x, y = nx,ny
        
    return x, y
        
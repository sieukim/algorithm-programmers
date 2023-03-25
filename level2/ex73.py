def solution(board):
    # 표의 크기
    n, m = len(board), len(board[0])
    
    # 정사각형 최대 넓이
    # 아래 반복문에서 board[0][0], board[0][1], board[1][0]를
    # 고려하지 않기 때문에 초기값에서 고려함
    maxsize = max(board[0][0], board[0][1] if m > 1 else 0, board[1][0] if n > 1 else 0)**2
    
    # dp
    for i in range(1, n):
        for j in range(1, m):
            if board[i][j] == 0:
                continue
            # 왼쪽-위, 왼쪽, 위 칸을 고려
            board[i][j] = min(board[i-1][j], board[i][j-1], board[i-1][j-1])+1
            # 최대 넓이 갱신
            maxsize = max(maxsize, board[i][j]**2)

    return maxsize
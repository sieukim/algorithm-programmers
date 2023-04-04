def solution(board):
    # board 내에서 value의 개수 반환
    count = lambda board, value: sum([row.count(value) for row in board])
    # 선공과 후공의 개수
    blue, red = count(board, 'O'), count(board, 'X')
    
    # 개수 관계 확인
    if not (blue == red or blue == red+1):
        return 0
     
    # 맞춘 개수 
    n = len(board)
    rows = [row for row in board]
    cols = ["".join([board[j][i] for j in range(n)]) for i in range(n)]
    diagonals = ["".join([board[i][i] for i in range(n)]), "".join([board[i][n-1-i] for i in range(n)])]
    lines = rows+cols+diagonals
    blueWin, redWin = lines.count('OOO'), lines.count('XXX')
    
    # 선공이 맞춘 경우
    if blueWin > 0 and redWin == 0:
        if blue-1 == red:
            return 1
        else:
            return 0
    # 후공이 맞춘 경우
    elif blueWin == 0 and redWin > 0:
        if blue == red:
            return 1
        else:
            return 0
    # 모두 못 맞춘 경우
    elif blueWin == 0 and redWin == 0:
        return 1
    # 그 외
    else:
        return 0
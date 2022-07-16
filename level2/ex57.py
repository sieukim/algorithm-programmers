from functools import reduce

def solution(n):
    # 삼각 배열 
    arr = [[0] * (i+1) for i in range(n)]
    # 현재 숫자, 행, 열
    number, row, column = 1, 0, 0
    # 이동 방향 (세로, 가로, 대각선)
    moves, move = [(1, 0), (0, 1), (-1, -1)], 0
    
    for i in range(n, -1, -1):
        for j in range(i):
            arr[row][column] = number
            number += 1
            move = move if j < i-1 else (move + 1) % 3
            row += moves[move][0]
            column += moves[move][1]
        
    return reduce(lambda x, y: x + y, arr)
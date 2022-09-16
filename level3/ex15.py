def solution(board, skill):
    # type 1
    def attack(r1, c1, r2, c2, degree):
        cumSum[r1][c1] -= degree
        cumSum[r2+1][c2+1] -= degree
        cumSum[r1][c2+1] += degree
        cumSum[r2+1][c1] += degree
    
    # type 2
    def recover(r1, c1, r2, c2, degree):
        cumSum[r1][c1] += degree
        cumSum[r2+1][c2+1] += degree
        cumSum[r1][c2+1] -= degree
        cumSum[r2+1][c1] -= degree
    
    # 행렬 크기
    n, m = len(board), len(board[0])
    # 누적 합 리스트 cumSum[i][j]: (0, 0) ~ (i, j) 사이의 변화값
    cumSum = [[0] * (m+1) for _ in range(n+1)]
    
    for type, r1, c1, r2, c2, degree in skill:
        if type == 1:
            attack(r1, c1, r2, c2, degree)
        elif type == 2:
            recover(r1, c1, r2, c2, degree)
    
    # 가로 방향 누적합
    for i in range(n):
        for j in range(1, m):
            cumSum[i][j] += cumSum[i][j-1]

    # 세로 방향 누적합
    for i in range(1, n):
        for j in range(m):
            cumSum[i][j] += cumSum[i-1][j]
    
    # 내구도 확인
    answer = 0
    
    for i in range(n):
        for j in range(m):
            if board[i][j] + cumSum[i][j] > 0:
                answer += 1
                
    return answer
    
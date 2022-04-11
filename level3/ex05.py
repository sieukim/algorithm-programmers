def solution(m, n, puddles):
    # 나누는 수
    divisor = 1000000007
  
    # path: n x m 리스트
    # n: 행 크기
    # m: 열 크기
    # path[i][j]: 집([0, 0])에서 [i + 1, j + 1]까지 가는 최단 경로의 개수
    path = [[0] * m for _ in range(n)]
    
    # 집에서 집까지의 최단 경로 개수 = 1
    path[0][0] = 1
 
    for i in range(n):
        for j in range(m):
            # 물 웅덩이인 경우
            if [j + 1, i + 1] in puddles:
                path[i][j] = 0
            # 집인 경우
            elif i == 0 and j == 0:
                continue
            # 첫번째 행인 경우
            elif i == 0 and j > 0:
                path[i][j] = path[i][j - 1]
            # 첫번째 열인 경우
            elif j == 0 and i > 0:
                path[i][j] = path[i - 1][j]
            # 그 외
            else:
                path[i][j] = (path[i - 1][j] + path[i][j - 1]) % divisor

    return path[n - 1][m - 1] % divisor
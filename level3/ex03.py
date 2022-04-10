def solution(triangle):
    # 삼각형 변의 길이
    n = len(triangle)
    
    # maxSum[i][j]: triangle[i][j]부터 시작하여 바닥까지 거쳐간 숫자 합의 최대값 (bottomUp)
    # maxSum[i][j] = max(maxSum[i + 1][j], maxSum[i + 1][j + 1])
    maxSum = [[0] * (i + 1) for i in range(0, n)]
    
    # 맨 아래 줄 = 삼각형 바닥 줄
    maxSum[n - 1] = triangle[n - 1]

    # bottomUp
    for i in reversed(range(n - 1)):
        for j in range(i + 1):
            maxSum[i][j] = triangle[i][j] + max([maxSum[i + 1][j], maxSum[i + 1][j + 1]])
        
    return maxSum[0][0]
def solution(land):
    n, m = len(land), len(land[0])
    arr = [[0] * m for i in range(n)]

    for i in range(n):
        for j in range(m):
            if i == 0:
                arr[i][j] = land[i][j]
            else:
                for k in range(m):
                    if k != j:
                        arr[i][j] = max(arr[i][j], land[i][j] + arr[i-1][k])
    
    return max(arr[-1])
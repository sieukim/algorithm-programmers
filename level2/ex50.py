def solution(n):
    # dp[i]: 가로 길이가 n인 직사각형을 채우는 방법의 수
    # dp[i] = dp[i-1] + dp[i-2] 
    dp = [0 for i in range(n + 1)]
    
    dp[1] = 1
    dp[2] = 2

    for i in range(3, n + 1):
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
    
    return dp[n]
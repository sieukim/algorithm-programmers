def solution(n):
    # dp[i]: i칸까지의 경우의 수
    # dp[i] = dp[i-1] + dp[i-2]
    dp = [0, 1, 2]
    
    for i in range(3, n+1):
        dp.append((dp[i-1] + dp[i-2]) % 1234567)

    return dp[n]
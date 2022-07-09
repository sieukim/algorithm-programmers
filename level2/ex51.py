def solution(n):
    n, mod = divmod(n, 2)
    
    # 홀수 길이 -> 불가능
    if mod == 1:
        return 0
    
    # dp[i] = dp[i-1] * 3 + dp[i-2] * 2 + dp[i-3] * 2 + ... dp[1] * 2 + 2
    dp = [0 for _ in range(n + 1)]
    dp[1] = 3
    
    for i in range(2, n + 1):
        dp[i] += dp[i-1] * 3
        dp[i] += sum(dp[:i-1]) * 2
        dp[i] += 2
        dp[i] %= 1000000007

    return dp[n]
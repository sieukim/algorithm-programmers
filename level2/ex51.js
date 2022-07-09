function solution(n) {
    // 홀수 길이 -> 불가능
    if (n % 2 == 1) {
        return 0;
    } else {
        n /= 2;
    }
    
    // dp[i] = dp[i-1] * 3 + dp[i-2] * 2 + dp[i-3] * 2 + ... dp[1] * 2 + 2
    const dp = [0, 3];
    
    for (let i = 2; i < n + 1; i++) {
        dp[i] = dp[i-1] * 3;
        dp[i] += dp.slice(0, i-1).reduce((a, b) => a + b) * 2;
        dp[i] += 2;
        dp[i] %= 1000000007;
    }
    
    return dp[n];
}
function solution(n) {
    // dp[i]: 가로 길이가 n인 직사각형을 채우는 방법의 수
    // dp[i] = dp[i-1] + dp[i-2] 
    const dp = new Array(n + 1).fill(0);
    
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i < n + 1; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1000000007;
    }
  
    return dp[n];
}
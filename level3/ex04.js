function solution(N, number) {

    // dp[i]에 해당하는 사칙연산 결과값을 반환하는 함수
    // dp[i] = dp[k] (+, -, *, //) d[i-k] (0 < k < i)
    function getResult(dp, i) {
        const result = [];
        
        for (let k=1; k<i; k++) {
            for (const value1 of dp[k]) {
                for (const value2 of dp[i-k]) {
                    // +, -, * 결과값 추가
                    result.push(value1+value2);
                    result.push(value1-value2);
                    result.push(value1*value2);
                    // // 결과값 추가
                    if (value2 > 0) {
                        result.push(parseInt(value1/value2));
                    }
                    
                }
            }
        }
        
        // 음수 값 제거하여 반환
        return result.filter(value => value > 0);
    }

    // dp[i]: N을 i번 사용해서 만들 수 있는, 모든 수의 집합
    const dp = new Array(9).fill([]); // 최솟값이 8보다 크면 -1을 반환
    dp[0] = [0];
    dp[1] = [N];
    
    for (let i = 2; i <= 8; i++) {
        // N이 i번 연속된 수 추가
        dp[i].push(N.toString().repeat(i));
        // 그 외 사칙연산 결과값 추가 
        dp[i] = [
            parseInt(N.toString().repeat(i)),
            ...getResult(dp, i)
        ];
    } 
    
    let answer = -1;
    
    for (let i = 0; i <= 8; i++) {
        if (dp[i].includes(number)) {
            answer = i;
            break;
        }
    }
    
    return answer;
}

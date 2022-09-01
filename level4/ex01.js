function solution(n) {
    function factorial(n) {
        let answer = BigInt(1);
        
        for (let i = 2; i <= n; i++) {
            answer *= BigInt(i);
        }
        
        return answer;
    }
    
    // Catalan Number => C(n) = (2n)! / (n! * (n+1)!)
    return factorial(2*n) / (factorial(n) * factorial(n+1));
}
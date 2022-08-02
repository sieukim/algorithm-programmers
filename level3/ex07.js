function solution(n, s) {
    // 자연수 n개의 합 = s >= n
    if (s < n) {
        return [-1];
    }
    
    // s / n 값으로 초기화
    const answer = new Array(n).fill(Math.floor(s/n));
    // s - 현재 원소의 합
    s = s - answer.reduce((a, b) => a + b);
    
    for (let i = 0; i < s; i++) {
        answer[i] += 1;
    }
    
    // 오름차순 정렬
    answer.sort();
    
    return answer;
}
function solution(A, B) {
    // B 팀의 승점 
    let answer = 0;
    
    // 오름차순 정렬
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    // 각 팀 순서
    let a = 0;
    let b = 0;

    while (a < A.length && b < B.length) {
        if (A[a] < B[b]) {
            answer++;
            a++;
        }
        b++;
    }
    
    return answer;
}
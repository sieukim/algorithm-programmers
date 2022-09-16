function solution(board, skill) {
    // type 1
    function attack(r1, c1, r2, c2, degree) {
        cumSum[r1][c1] -= degree;
        cumSum[r2+1][c2+1] -= degree;
        cumSum[r2+1][c1] += degree;
        cumSum[r1][c2+1] += degree;
    }
    
    // type 2
    function recover(r1, c1, r2, c2, degree) {
        cumSum[r1][c1] += degree;
        cumSum[r2+1][c2+1] += degree;
        cumSum[r2+1][c1] -= degree;
        cumSum[r1][c2+1] -= degree;
    }
    
    // 행렬의 크기
    const [n, m] = [board.length, board[0].length];
    // 누적합 배열 cumSum[i][j]: (0, 0) ~ (i, j) 사이의 변화값
    const cumSum = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    
    for (let i = 0; i < skill.length; i++) {
        const [type, r1, c1, r2, c2, degree] = skill[i];
        if (type === 1) {
            attack(r1, c1, r2, c2, degree);
        } else if (type === 2) {
            recover(r1, c1, r2, c2, degree);
        }
    }
    
    // 가로 누적합
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < m; j++) {
            cumSum[i][j] += cumSum[i][j-1];
        }
    }
    
    // 세로 누적합
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < m; j++) {
            cumSum[i][j] += cumSum[i-1][j];
        }
    }
    
    // 누적도 확인
    let answer = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] + cumSum[i][j] > 0) {
                answer += 1;
            }
        }
    }
    
    return answer;
}
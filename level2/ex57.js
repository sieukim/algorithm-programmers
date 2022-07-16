function solution(n) {
    // 삼각 배열
    const arr = Array.from({ length: n }, (_, i) => Array(i+1).fill(0));
    // 현재 숫자, 행, 열, 이동 방향
    let [number, row, column, move] = [1, 0, 0, 0];
    // 이동 방향 배열
    const moves = [[1, 0], [0, 1], [-1, -1]];
    
    for (let i = n; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            arr[row][column] = number++;
            move = j < i - 1 ? move : (move + 1) % 3;
            row += moves[move][0];
            column += moves[move][1];
        }
    }

    return arr.flatMap(v => v);
}
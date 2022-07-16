function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const arr = Array.from({ length: n}, () => Array(m).fill(0));
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0) {
                arr[i][j] = land[i][j];
            } else {
                for (let k = 0; k < m; k++) {
                    if (k !== j) {
                        arr[i][j] = Math.max(arr[i][j], land[i][j] + arr[i-1][k]);
                    }
                }
            }
        }
    }
    
    return arr[n-1].reduce((a, b) => Math.max(a, b));
}
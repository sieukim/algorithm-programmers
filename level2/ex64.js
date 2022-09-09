function solution(m, n, board) {
    // 전치
    function transpose(src) {
        const dest = [];

        for (let i = 0; i < src[0].length; i++) {
            dest.push([]);
            for (let j = 0; j < src.length; j++) {
                dest[i].push(src[j][i]);
            }
        }

        return dest;
    }

    // 모든 2x2 블록 위치 반환 함수
    function find(src) {
        const index = new Set();

        for (let i = 0; i < src.length-1; i++) {
            for (let j = 0; j < src[i].length-1; j++) {
                // 높이 차이
                const diff = src[i+1].length - src[i].length;
                if (j+diff < 0 || j+diff >= src[i+1].length) {
                    continue;
                }
                // 오른쪽
                if (src[i][j] != src[i][j+1]) {
                    continue;
                }
                // 아래
                if (src[i][j] != src[i+1][j+diff]) {
                    continue;
                }
                // 대각선
                if (src[i][j] != src[i+1][j+diff+1]) {
                    continue;
                }
                // 삭제 위치 추가
                index.add([i, j].toString());
                index.add([i, j+1].toString());
                index.add([i+1, j+diff].toString());
                index.add([i+1, j+diff+1].toString());
            }
        }

        return index;
    }

    // 모든 2x2 블록 삭제 함수
    function remove(src, index) {
        const dest = [];

        for (let i = 0; i < src.length; i++) {
            dest.push([]);
            for (let j = 0; j < src[i].length; j++) {
                if (index.has([i, j].toString())) {
                    continue;
                }
                dest[i].push(src[i][j]);
            }
        }

        return dest;
    }

    let answer = 0;
    board = transpose(board);

    while (true) {
        const index = find(board);
        if (index.size === 0) {
            break;
        }
        answer += index.size;
        board = remove(board, index);
    }

    return answer;
}
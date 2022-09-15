function solution(n, apeach, k=11) {
    function dfs(n, i=0, lion=new Array(k).fill(0)) {
        // 모든 화살을 사용한 경우
        if (n === 0) {
            answer.push(lion);
            return;
        }
        // 탐색 종료
        if (i === k + 1 || n < 0) {
            return;
        }
        if (i < k) {
            // 라이언이 점수를 획득한 경우
            dfs(n-(apeach[i]+1), i+1, [...lion.slice(0, i), apeach[i]+1, ...lion.slice(i+1)]);
            // 라이언이 점수를 포기한 경우
            dfs(n, i+1, [...lion]);
        } else {
            dfs(0, i+1, [...lion.slice(0, lion.length-1), n]);
        }
    }  
    
    // 라이언과 어피치의 점수 차이를 반환하는 함수
    function result(lion, apeach) {
        let diff = 0;
        
        for (let i = 0; i < k; i++) {
            if (lion[i] > 0) {
                // 라이언 득점
                diff += k-i-1;
            } else if (apeach[i] > 0) {
                // 어피치 득점
                diff -= k-i-1;
            }
        }
        
        return diff;
    }
    
    let answer = [];
    dfs(n);

    // 라이언 기록 => [라이언 기록, 어피치와의 점수 차이]
    answer = answer.map(lion => [lion, result(lion, apeach)]);
    // 최대 점수 차이
    let max_diff = -55;
    for (let i = 0; i < answer.length; i++) {
        max_diff = Math.max(max_diff, answer[i][1]);
    }
    // 라이언이 이길 수 없는 경우
    if (max_diff <= 0) {
        return [-1];
    }
    // 최대 점수 차이를 갖는 기록만 필터링
    answer = answer.filter(value => value[1] === max_diff)
                   .map(value => value[0]);
    // 가장 낮은 점수를 더 맞춘 경우
    answer.sort((a, b) => {
        const newA = [...a].reverse().join('');
        const newB = [...b].reverse().join('');
        return newB - newA;
    });
    return answer[0];
}
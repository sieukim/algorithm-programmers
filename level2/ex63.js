function solution(line) {
    // 모든 별(교점)의 위치와 좌표의 크기를 반환하는 함수
    function getStars(line) {
        let stars = new Set();
        // 직선의 개수
        const n = line.length;
        
        for (let i = 0; i < n; i++) {
            const [a, b, e] = line[i];
            for (let j = i + 1; j < n; j++) {
                const [c, d, f] = line[j];
                // 평행 || 일치
                if (a * d - b * c === 0) {
                    continue;
                }
                // 교점의 위치
                const x = (b * f - e * d) / (a * d - b * c);
                const y = (e * c - a * f) / (a * d - b * c);
                // 정수 좌표만 추가
                if (x % 1 === 0 && y % 1 === 0) {
                    stars.add([x, y]);
                }
            }
        }
        
        // set -> array
        stars = new Array(...stars);
        // x, y 좌표의 최소 값과 최대 값
        const min_x = Math.min(...stars.map(value => value[0]));
        const max_x = Math.max(...stars.map(value => value[0]));
        const min_y = Math.min(...stars.map(value => value[1]));
        const max_y = Math.max(...stars.map(value => value[1]));
        
        // 모든 좌표가 양수 값을 갖도록 평행 이동
        for (let i = 0; i < stars.length; i++) {
            const [x, y] = stars[i];
            stars[i] = [x - min_x, -(y - max_y)];
        }
        
        return [stars, max_y - min_y + 1, max_x - min_x + 1];
    }
    
    // 좌표 공간 위에 모든 별을 그리는 함수
    function drawStars(line) {
        const [stars, n, m] = getStars(line);
        // 좌표 공간
        const space = Array.from({ length: n }, () => new Array(m).fill('.'));

        for (const [x, y] of stars) {
            space[y][x] = '*';
        }
        
        return space.map(value => value.join(''));
    }
    
    return drawStars(line);
}
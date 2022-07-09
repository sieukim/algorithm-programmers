// i번째 위치에 놓일 블록을 찾는 함수 
function getBlock(x) {
    for (let i = 2; i <= Math.sqrt(x); i++) {
        const div = parseInt(x / i);
        const mod = x % i;
        if (mod === 0 && div <= 10000000) {
            return div;
        }
    }
    return x >= 2 ? 1 : 0
}

function solution(begin, end) {
    const answer = [];
    
    for (let i = begin; i <= end; i++) {
        answer.push(getBlock(i));
    }
    
    return answer;
}
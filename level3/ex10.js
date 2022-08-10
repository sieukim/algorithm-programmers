function solution(n, works) {
    for (let i = 0; i < n; i++) {
        // 최대값
        const value = works.reduce((a, b) => Math.max(a, b));
        // 남은 피로도가 없는 경우
        if (value === 0) {
            return 0;
        }
        // 인덱스
        const index = works.indexOf(value);
        // 1씩 감소
        works[index] -= 1;   
    }
    
    works = works.map(value => value ** 2);
    return works.reduce((a, b) => a + b);
}
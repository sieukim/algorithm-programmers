// 팰린드롬 판별 및 투포인터 확장
function expand(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left -= 1;
        right += 1;
    }
    return right - left - 1;
}
function solution(s) {
    if (s.length < 2) {
        return s.length;
    } 
    
    let result = 0;
    
    for (let i = 0; i < s.length - 1; i++) {
        result = Math.max(result, expand(s, i, i + 1));
        result = Math.max(result, expand(s, i, i + 2));
    }
    
    return result;
}
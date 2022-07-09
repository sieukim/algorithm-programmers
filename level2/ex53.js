// 팩토리얼 
function factorial(x) {
    return x > 1 ? x * factorial(x - 1) : 1;
}

// 몫과 나머지
function divmod(a, b) {
    return [parseInt(a / b), a % b];
}

// 인덱스 반환
function getIndex(div, mod, n) {
    if (mod !== 0) return div;
    else if (div > 0) return div - 1;
    else return n - 1;
}

function solution(n, k) {
    const answer = [];
    const number = Array.from({length: n}, (_, i) => i+1);

    for (let i = n; i >= 1; i--) {
        const [div, mod] = divmod(k, factorial(i-1));
        const index = getIndex(div, mod, number.length);
        answer.push(number[index]);
        number.splice(index, 1);
        k = mod;
    }
    
    return answer;
}
function solution(number, k) {
    // 내림차순으로 정렬된 경우
    if (number === number.split('').sort().reverse().join('')) {
        return number.slice(0, -k);
    }
    
    // 숫자를 담을 스택
    const stack = [];
    
    for (let i = 0; i < number.length; i++) {
        while (stack && stack[stack.length-1] < number[i] && k > 0) {
            stack.pop();
            k -= 1;
        }
        stack.push(number[i]);
    }
    
    return stack.join('');
}
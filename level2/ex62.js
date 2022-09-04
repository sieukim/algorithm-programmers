function solution(expression) {
    const isDigit = src => !isNaN(src);
    
    function split(src) {
        const dest = [];
        let num = '';
        
        for (const value of src) {
            if (isDigit(value)) {
                num += value;
            } else {
                dest.push(parseInt(num));
                dest.push(value);
                num = '';
            }
        }
        
        return [...dest, parseInt(num)];
    };
    
    function calculate(src, op) {
        const dest = [];
        
        for (let i = 0; i < src.length; i++) {
            if (src[i] === op) {
                const num1 = dest.pop();
                const num2 = src[i+1];
                dest.push(eval(num1+op+num2));
            } else if (src[i-1] === op) {
                continue;
            } else {
                dest.push(src[i]);
            }
        }
        
        return dest;
    };
    
    function findMax(src) {
        const result = [];
        const perms = [
            ['+', '-', '*'],
            ['+', '*', '-'],
            ['-', '+', '*'],
            ['-', '*', '+'],
            ['*', '+', '-'],
            ['*', '-', '+'],
        ];
        
        for (const perm of perms) {
            let dest = split(src);
            dest = calculate(dest, perm[0]);
            dest = calculate(dest, perm[1]);
            dest = calculate(dest, perm[2]);
            result.push(Math.abs(dest[0]));
        }
        
        return Math.max(...result);
    }
    
    return findMax(expression);
}
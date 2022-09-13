function solution(operations) {
    const MAX = 1;
    const MIN = 0;
    
    function append(q, num) {
        q.push(parseInt(num));
        q.sort((a, b) => a - b);
        return q;
    }
    
    function remove(type, q) {
        if (type === MAX) q.pop();
        else if (type === MIN) q.shift();
        return q;
    }
    
    function get(type, q) {
        if (type === MAX) return q[q.length-1];
        else if (type === MIN) return q[0];
    }
    
    let q = [];
    
    for (const operation of operations) {
        const [op, num] = operation.split(' ');
        if (op === 'I') q = append(q, num);
        else if (num === '1') q = remove(MAX, q);
        else if (num === '-1') q = remove(MIN, q);
    }
    
    if (q.length === 0) return [0, 0];
    else return [get(MAX, q), get(MIN, q)];
}
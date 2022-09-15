function solution(queue1, queue2) {
    // q1의 원소를 추출하고, 추출된 원소를 q2에 집어넣는 함수
    function operate(q1, q2, pop1, pop2, sum1, sum2) {
        const value = q1[pop1];
        q2.push(value);
        pop1 += 1;
        sum1 -= value;
        sum2 += value;
        return [q1, q2, pop1, pop2, sum1, sum2];
    }
    
    // 연산 횟수
    let answer = 0;
    // 두 큐의 길이
    const n = queue1.length;
    // 두 큐의 합
    let sum1 = queue1.reduce((a, b) => a + b);
    let sum2 = queue2.reduce((a, b) => a + b);
    // 두 큐 각각에서 pop이 실행될 위치(인덱스)
    let pop1 = 0;
    let pop2 = 0;
    
    while (sum1 != sum2) {
        if (sum1 > sum2) {
            [queue1, queue2, pop1, pop2, sum1, sum2] = operate(queue1, queue2, pop1, pop2, sum1, sum2);
        } else {
            [queue2, queue1, pop2, pop1, sum2, sum1] = operate(queue2, queue1, pop2, pop1, sum2, sum1);
        }
        if (pop1 == 2 * n || pop2 == 2 * n) {
            answer = -1;
            break;
        } else {
            answer += 1;
        }
    }
    
    return answer;
}
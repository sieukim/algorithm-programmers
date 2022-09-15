def solution(queue1, queue2):
    # q1의 원소를 추출하고, 추출된 원소를 q2에 집어넣는 함수
    def operate(q1, q2, pop1, pop2, sum1, sum2):
        value = q1[pop1]
        q2.append(value)
        pop1 += 1
        sum1 -= value
        sum2 += value
        return q1, q2, pop1, pop2, sum1, sum2
    
    # 연산 횟수 
    answer = 0
    # 큐의 길이
    n = len(queue1)
    # 두 큐의 합
    sum1, sum2 = sum(queue1), sum(queue2)
    # 두 큐 각각에서 pop이 실행될 위치(인덱스)
    pop1, pop2 = 0, 0
    
    while sum1 != sum2:
        if sum1 > sum2:
            queue1, queue2, pop1, pop2, sum1, sum2 = operate(queue1, queue2, pop1, pop2, sum1, sum2)
        else:
            queue2, queue1, pop2, pop1, sum2, sum1 = operate(queue2, queue1, pop2, pop1, sum2, sum1)
        
        if pop1 == 2 * n or pop2 == 2 * n:
            answer = -1
            break
        else:
            answer += 1
        
    return answer
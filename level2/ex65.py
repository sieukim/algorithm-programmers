from collections import deque

def solution(queue1, queue2):
    # 작업 수행
    def operate(queue1, queue2, sum1, sum2):
        value = queue1.popleft()
        queue2.append(value)
        return sum1-value, sum2+value

    # 작업 횟수
    count = 0
    # 최대 작업 횟수
    max_count = 2*(len(queue1) + len(queue2))
    # 두 큐의 합
    sum1, sum2 = sum(queue1), sum(queue2)
    # list -> deque
    queue1, queue2 = deque(queue1), deque(queue2)

    while sum1 != sum2:
        # 작업 수행
        if sum1 > sum2:
            sum1, sum2 = operate(queue1, queue2, sum1, sum2)
        else:
            sum2, sum1 = operate(queue2, queue1, sum2, sum1)
        # 종료 조건
        if count >= max_count:
            count = -1
            break
        else:
            count += 1

    return count
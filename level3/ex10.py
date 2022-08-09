from heapq import heapify, heappush, heappop

def solution(n, works):
    # max heap 생성 
    works = [-value for value in works]
    heapify(works)
    
    for i in range(n):
        # 최대값 pop
        max_value = heappop(works)
        # 남은 작업량이 없는 경우
        if max_value == 0:
            return 0
        # 1을 더해 push
        heappush(works, max_value+1)

    return sum([value ** 2 for value in works])
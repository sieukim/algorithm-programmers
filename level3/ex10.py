from heapq import heapify, heappush, heappop

def solution(n, works):
    # 최대 힙 구성
    works = [-work for work in works]
    heapify(works)

    # N시간 동안 작업
    for _ in range(n):
        max_value = min(0, heappop(works)+1)
        heappush(works, max_value)

    # 피로도 계산
    return sum([work*work for work in works])
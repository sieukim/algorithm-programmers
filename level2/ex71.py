from heapq import heappush, heappop

def solution(n, k, enemy):
    # 최대 힙 push
    def maxheappush(maxheap, value):
        heappush(maxheap, -value)
    
    # 최대 힙 pop
    def maxheappop(maxheap):
        return -heappop(maxheap)
    
    last_round = len(enemy)
    maxheap = []
    cumsum = 0
    
    for i, value in enumerate(enemy):
        # 현재 라운드에 대한 정보 추가
        maxheappush(maxheap, value)
        cumsum += value
        # 누적합이 병사 수보다 큰 경우
        if cumsum > n:
            # 무적권이 있는 경우 -> 사용
            if k > 0:
                cumsum -= maxheappop(maxheap)
                k -= 1
            # 무적권이 없는 경우 -> 종료
            else:
                last_round = i
                break
                
    return last_round

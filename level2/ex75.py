from collections import Counter
from heapq import heapify, heappop

def solution(k, tangerine):
    # 맥스힙 만들기
    def maxheapify(arr):
        arr = [-value for value in arr]
        heapify(arr)
        return arr
    
    # 맥스힙 pop
    def maxheappop(maxheap):
        return -heappop(maxheap)
    
    # 각 사이즈별 개수
    counter = Counter(tangerine).values()
    counter = maxheapify(counter)
    # 서로 다른 종류의 수
    types = 0
    
    while k > 0:
        k -= maxheappop(counter)
        types += 1
        
    return types
 
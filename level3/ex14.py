from heapq import heappush, heappop, nlargest, heapify

def solution(operations):
    MAX = 1
    MIN = 0
    
    def remove(type, heap):
        if len(heap) == 0:
            return heap
        if type == MAX:
            heap = nlargest(len(heap), heap)[1:]
            heapify(heap)
        elif type == MIN:
            heappop(heap)
        return heap
    
    def get(type, heap):
        if type == MAX: 
            return nlargest(len(heap), heap)[0]
        elif type == MIN: 
            return heappop(heap)
    
    heap = []
    
    for operation in operations:
        op, num = operation.split(' ')
        if op == 'I': 
            heappush(heap, int(num))
        elif num == '1': 
            heap = remove(MAX, heap)
        elif num == '-1': 
            heap = remove(MIN, heap)
                
    if len(heap) == 0: 
        return [0, 0]
    else: 
        return [get(MAX, heap), get(MIN, heap)]
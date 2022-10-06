from collections import deque

def solution(numbers, direction):
    # 리스트 -> 데크
    numbers = deque(numbers)
    
    if direction == 'left':
        value = numbers.popleft()
        numbers.append(value)
    else:
        value = numbers.pop()
        numbers.appendleft(value)
        
    return list(numbers)
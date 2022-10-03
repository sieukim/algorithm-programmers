def solution(n):
    # i와 i팩토리얼
    i, fact = 1, 1
    
    while fact <= n:
        i += 1
        fact *= i
        
    return i-1
    
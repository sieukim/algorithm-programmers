def solution(n):
    # 6 조각으로 이루어진 피자 x 판을 주문할 때, n명이 동일하게 나눠먹을 수 있는지를 반환
    def equal(n, x):
        return x * 6 % n == 0
    
    # 시킬 피자 판 수
    x = 1
    
    while not equal(n, x):
        x += 1
        
    return x
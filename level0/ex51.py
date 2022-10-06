def solution(order):
    # 3, 6, 9의 개수
    count = 0
    
    while order > 0:
        order, mod = divmod(order, 10)
        # 3, 6, 9
        if mod in [3, 6, 9]:
            count += 1
    
    return count
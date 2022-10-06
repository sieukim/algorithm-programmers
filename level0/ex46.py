def solution(hp):
    # 총 개미의 수
    count = 0
    
    for x in [5, 3, 1]:
        div, mod = divmod(hp, x)
        count += div
        hp = mod

    return count
        
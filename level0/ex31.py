def solution(lines):
    # lines의 원소 범위
    n = 99
    # 좌표 범위: (-99, 100) -> (0, 199)
    lines = [(x+n, y+n) for x,y in lines]
    # 누적합
    cumsum = [0 for _ in range(2*n+1)]
    
    for x, y in lines:
        start = min(x, y)
        end = max(x, y)
        cumsum[start] += 1
        cumsum[end] -= 1
    
    for i in range(1, 2*n+1):
        cumsum[i] += cumsum[i-1]
    
    return len([val for val in cumsum if val > 1])
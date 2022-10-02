def solution(dots):
    # x좌표 리스트
    x = [x for x, y in dots]
    # y좌표 리스트
    y = [y for x, y in dots]
    
    # 가로와 세로의 길이
    w = max(x)-min(x)
    h = max(y)-min(y)
    
    # 직사각형의 넓이
    return w*h
    
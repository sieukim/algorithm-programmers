def solution(dots):
    # 직선의 기울기를 반환하는 함수
    def gradient(line):
        i, j = line
        x1, y1 = dots[i]
        x2, y2 = dots[j]
        if x1 == x2:
            return None
        else:
            return (y1-y2)/(x1-x2)
    
    # 점의 개수 
    n = len(dots)
    
    for i in range(n):
        for j in range(i+1, n):
            line1 = [i, j]
            line2 = [k for k in range(n) if k not in line1]
            if gradient(line1) == gradient(line2):
                return 1
    
    return 0
from math import sqrt

def solution(brown, yellow):
    answer = []
    
    # 전체 카펫 넓이 = 갈색 격자 수 + 노랑 격자 수
    area = brown + yellow
    
    for i in range(1, int(sqrt(area)) + 1):
        # 가로, 세로
        width = area / i
        height = i
        
        # 갈색 격자 수 = 2 * (width + height) - 4
        if brown != 2 * (width + height) - 4:
            continue
        # 노랑 격자 수 = (width - 2) * (height - 2)
        if yellow != (width - 2) * (height - 2):
            continue
            
        # 조건을 만족한 경우
        answer.append(width)
        answer.append(height)
        break

    return answer
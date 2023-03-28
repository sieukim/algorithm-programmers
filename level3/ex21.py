def solution(routes):
    # 진출 위치를 기준으로 오름차순 정렬
    routes.sort(key=lambda x: x[1])
    # 마지막 설치 위치
    last = routes[0][-1]
    # 설치 카메라 개수
    count = 1
    
    for start, end in routes:
        # 마지막 설치 -> 진입 -> 진출
        if last < start:
            last = end
            count += 1
    
    return count
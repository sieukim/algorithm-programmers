from collections import deque

def solution(order):
    # 메인 컨테이너
    main_container = deque([i+1 for i in range(len(order))])
    # 보조 컨테이너
    sub_container = []
    # 실을 박스의 수
    count = 0
    
    for box1 in order:
        # 보조 컨테이너로 이동
        while main_container:
            if main_container[0] <= box1:
                box2 = main_container.popleft()
                sub_container.append(box2)
            else:
                break
        # 보조 컨테이너 확인
        if sub_container and sub_container[-1] == box1:
            sub_container.pop()
            count += 1
        else:
            break
    
    return count
def solution(max_length, max_weight, waiting):
    # 다리를 건너는 트럭: [무게, 현재 위치]
    passing = []
    # 현재 시간
    time = 0

    while not(len(waiting) == 0 and len(passing) == 0):
        # 현재 위치 이동 
        passing = [[value[0], value[1] + 1] for value in passing if value[1] < max_length]

        # 다리 위 트럭 수
        count = len(passing)
        # 다리 위 트럭 무게
        weight = sum([value[0] for value in passing])

        # 대기 트럭이 존재하는 경우
        if waiting:
            # 건널 수 있는 경우
            if count < max_length and weight + waiting[0] <= max_weight:
                passing.append([waiting.pop(0), 1])

        # 현재 시간 갱신
        time += 1
    
    return time
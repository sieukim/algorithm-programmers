def solution(dirs):
    # 현재 좌표
    x, y = 0, 0
    # 지나간 경로 set 
    routes = set()
    # (x좌표 이동량, y좌표 이동량)
    moves = {'U': (0, 1), 'D': (0, -1), 'R': (1, 0), 'L': (-1, 0)}
    
    for value in dirs:
        # 이동량
        move = moves[value]
        # 다음 좌표
        nx, ny = x + move[0], y + move[1]
        
        # 이동 가능한 경우 
        if abs(nx) <= 5 and abs(ny) <= 5:
            # 순방향 경로 추가 
            routes.add((x, y, nx, ny))
            # 역방향 경로 추가
            routes.add((nx, ny, x, y))
            # 좌표 갱신
            x, y = nx, ny 

    return len(routes) // 2
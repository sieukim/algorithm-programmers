def solution(numbers, hand):
    # 로그 딕셔너리
    logs = {
        'all': [],
        'R': [10],
        'L': [12]
    }
    
    # 손 위치 딕셔너리
    hands = {
        0: None, 2: None, 5: None, 8: None,
        1: 'L', 4: 'L', 7: 'L',
        3: 'R', 6: 'R', 9: 'R'
    }
    
    # 두 번호 사이 거리를 반환하는 함수
    def dist(n1, n2):
        # 두 번호 중 하나가 0인 경우 11으로 변경
        if n1 == 0: n1 = 11
        if n2 == 0: n2 = 11
        
        # n1에 대한 좌표
        x1, y1 = divmod(n1 - 1, 3)
        # n2에 대한 좌표
        x2, y2 = divmod(n2 - 1, 3)
        
        # 두 좌표간 거리 반환
        return abs(x1 - x2) + abs(y1 - y2)
    
    for number in numbers:
        # 현재 번호에 해당하는 손
        using_hand = hands[number]
        
        # 손이 정해지지 않은 경우
        if not using_hand:
            # 오른손 최근 위치와 현재 번호 사이의 거리
            dist_r = dist(logs['R'][-1], number)
            # 왼손 최근 위치와 현재 번호 사이의 거리
            dist_l = dist(logs['L'][-1], number)
            
            # 오른손이 가까운 경우
            if dist_r < dist_l:
                # 오른손 사용
                using_hand = 'R'
            # 왼손이 가까운 경우
            elif dist_r > dist_l:
                # 왼손 사용
                using_hand = 'L'
            # 거리가 같은 경우
            else:
                # 주사용 손 사용
                using_hand = hand[0].upper()   
        
        # 로그에 추가
        logs['all'].append(using_hand)
        logs[using_hand].append(number)
        
    # 모든 로그를 반환
    return "".join(logs['all'])
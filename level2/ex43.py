# 지원자 위치 반환 함수
def get_index(place, n=5):
    index = []
    
    for i in range(n):
        for j in range(n):
            if place[i][j] == 'P':
                index.append((i, j))

    return index

# 두 사람 간의 거리두기 지킴 여부 확인 함수
def check(place, index1, index2):
    # 맨해튼 거리 확인
    r1, c1 = index1
    r2, c2 = index2
    
    distance = abs(r1 - r2) + abs(c1 - c2)

    if distance > 2:
        return True
    if distance == 1:
        return False
    
    # 파티션 여부 확인 
    r1 = min(index1[0], index2[0])
    r2 = max(index1[0], index2[0])
    c1 = min(index1[1], index2[1])
    c2 = max(index1[1], index2[1])
    
    for i in range(r1, r2+1):
        for j in range(c1, c2+1):
            if place[i][j] == 'O':
                return False
    
    return True 

# 거리두기 지킴 여부 확인 함수
def check_all(place): 
    index = get_index(place)

    for i in range(len(index)):
        for j in range(i + 1, len(index)):
            if not check(place, index[i], index[j]):
                return 0
        
    return 1

def solution(places):
    answer = []
    
    for place in places:
        answer.append(check_all(place))
    
    return answer
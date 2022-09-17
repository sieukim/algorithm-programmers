def solution(key, lock):
    # 주어진 리스트 src 내 k 값을 갖는 인덱스 리스트를 반환하는 함수
    def index(src, k):
        return [(i, j) for i in range(len(src)) for j in range(len(src[0])) if src[i][j] == k]

    # 회전 횟수: k
    # k > 0 시계 방향으로 회전, k < 0 반시계 방향으로 회전
    def rotate(src, k):
        if k == 1:
            src = [(j, m-1-i) for i, j in src]
        elif k == -1:
            src = [(m-1-j, i) for i, j in src]
        elif k > 0:
            for _ in range(k):
                src = rotate(src, 1)
        elif k < 0:
            for _ in range(-k):
                src = rotate(src, -1)
        return src
    
    # 좌우 이동량: x , 상하 이동량: y
    # x > 0 오른쪽으로 이동, x < 0 왼쪽으로 이동
    # y > 0 아래로 이동, y < 0 위로 이동 
    def move(src, x, y):
        return [(i+y, j+x) for i, j in src]
    
    # 열림 확인 함수
    def unlock(index_key, index_lock):
        index_key_filtered = [(i, j) for i, j in index_key if i in range(n) and j in range(n)]
    
        for i, j in index_lock:
            if (i, j) not in index_key_filtered:
                return False
            else:
                index_key_filtered.remove((i, j))
        
        if len(index_key_filtered) > 0:
            return False
        
        return True
    
    # 자물쇠와 열쇠의 크기
    n, m = len(lock), len(key)
    # key 내 돌기의 위치 
    index_key = index(key, 1)
    # lock 내 홈의 위치
    index_lock = index(lock, 0)

    for k in range(-3, 3):
        index_key_rotated = rotate(index_key, k)
        for x in range(-n, n+1):
            for y in range(-n, n+1):
                index_key_moved = move(index_key_rotated, x, y)
                if unlock(index_key_moved, index_lock):
                    return True
                
    return False
def solution(n):
    # 유효한 숫자인지 판단하는 함수
    def valid(x):
        if x % 3 == 0:
            return False
        elif '3' in str(x):
            return False
        else:
            return True
        
    # arr[i]: 3x 마을에서의 i
    arr = [0 for _ in range(n+1)]
    # 현재 숫자
    num = 0
    
    for i in range(1, n+1):
        # 다음 숫자
        num += 1
        # 유효한 숫자 탐색
        while not valid(num):
            num += 1
        # arr[i] 갱신
        arr[i] = num
        
    return arr[n]
from collections import deque

def solution(A, B):
    # 각 문자를 오른쪽으로 한 칸씩 밀고
    # 마지막 문자는 맨 앞으로 이동시키는 연산
    def op(src):
        value = src.pop()
        src.appendleft(value)
    
    # 문자열 길이와 연산 횟수
    n, count = len(A), 0
    # 리스트 -> deque
    A = deque(A)
    B = deque(B)
    
    # 0~(n-1)번 수행
    for i in range(n):
        if A == B:
            return i
        op(A)
        
    return -1
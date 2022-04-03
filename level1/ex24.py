import math

def solution(n):
    sqrt = math.sqrt(n)
    
    # 제곱근이 정수인 경우
    if sqrt.is_integer():
        return math.pow(sqrt + 1, 2)
    # 제곱근이 실수(정수 제외)인 경우
    else:
        return -1
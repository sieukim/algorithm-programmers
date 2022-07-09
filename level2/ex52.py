from math import sqrt

# i번째 위치에 놓일 블록을 찾는 함수 
def get_block(x):
    for i in range(2, int(sqrt(x)) + 1):
        div, mod = divmod(x, i)
        if mod == 0 and div <= 10000000:
            return div
    return 1 if x >= 2 else 0

def solution(begin, end):
    return [get_block(i) for i in range(begin, end + 1)]
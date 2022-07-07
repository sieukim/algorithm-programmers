# 이진 변환 함수
def convert(s, times=0, count=0):
    if s == '1':
        return [times, count]

    n = len(s)
    m = s.count('0')
    s = bin(n - m)[2:]
    
    return convert(s, times + 1, count + m)

def solution(s):
    return convert(s)
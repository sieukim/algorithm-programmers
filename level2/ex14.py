from math import gcd, ceil, floor

def solution(w, h):
    if w==1 or h==1:
        return 0
    # x값 0부터 a까지 대각선이 지나는 사각형의 개수 계산
    n = gcd(w,h)
    a = int(w/n)
    b = int(h/n)
    f = lambda x: -b/a*x+b
    g = lambda x: ceil(f(x))-floor(f(x+1))
    unused = sum([g(i) for i in range(a)])
    # 전체 사각형의 개수 - 대각선이 지나는 전체 사각형의 개수
    return w*h-unused*(w/a)
# f(x) : x보다 크고 x와 비트가 1~2개 다른 수들 중에서 가장 작은 수
def f(x):
    # ___0 => ___1 : 4로 나눈 나머지가 0 또는 2
    if x % 2 == 0:
        x += 1
    # __01 => __10 : 4로 나눈 나머지가 1
    elif x % 4 == 1:
        x += 1
    # __11 => __101 : 4로 나눈 나머지가 3
    elif x % 4 == 3:
        # 이진수 변환
        x_bin = bin(x)[2:]
        # 가장 우측에 위치한 0의 위치
        i = len(x_bin) - x_bin.rfind('0') - 1
        # i번째 위치는 1으로, (i+1)번째 위치는 0으로 변경
        x += 2**i - 2**(i-1)
    
    return x
        
def solution(numbers):
    # f(x) 실행
    return [f(x) for x in numbers]

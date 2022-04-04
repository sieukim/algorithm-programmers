def solution(x):
    # 각 자릿수로 이루어진 리스트
    digits = list(map(int, str(x)))
    # 각 자릿수 합
    digitSum = sum(digits)
    return x % digitSum == 0
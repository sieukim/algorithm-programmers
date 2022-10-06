def solution(num, k):
    # 정수형 -> 문자열
    num, k = str(num), str(k)
    
    if k in num:
        return num.find(k) + 1
    else:
        return -1

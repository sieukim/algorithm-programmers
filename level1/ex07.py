def solution(absolutes, signs):
    # true -> 1, false -> -1 
    signs = list(map(lambda x: 1 if x else -1, signs))
    # 부호 적용한 숫자 배열
    numbers = [absolutes[i] * signs[i] for i in range(len(absolutes))]
    return sum(numbers)
    
        
def solution(age):
    # 알파벳 개수 
    n = 26
    # 숫자: 알파벳
    age_dict = {i: chr(i+ord('a')) for i in range(n)}
    # 변환 결과
    result = ''
    
    while age > 0:
        age, mod = divmod(age, 10)
        result = age_dict[mod] + result

    return result
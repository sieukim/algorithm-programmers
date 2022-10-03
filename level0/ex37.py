def solution(numbers):
    # eng: (eng에 대응하는 num, eng의 원래 길이)
    eng_to_num = {
        'ze': ('0', 4), 'on': ('1', 3),
        'tw': ('2', 3), 'th': ('3', 5),
        'fo': ('4', 4), 'fi': ('5', 4),
        'si': ('6', 3), 'se': ('7', 5),
        'ei': ('8', 5), 'ni': ('9', 4),
    }
    
    # 변환 결과
    result = ''
    # 문자열 포인터
    i = 0
    
    while i < len(numbers):
        eng = numbers[i:i+2]
        num, n = eng_to_num[eng]
        result += num
        i += n
    
    return int(result)
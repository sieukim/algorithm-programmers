import re

def solution(s):
    # 변환 결과
    result = s
    
    # 'zero' ~ 'nine' 리스트
    eng_list = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    # 'zero' ~ 'nine'을 '0' ~ '9'로 변환
    for i in range(10):
        result = re.sub(eng_list[i], str(i), result)
    
    return int(result)
    
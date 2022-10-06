from collections import Counter

def solution(my_string):
    # 문자의 개수
    counter = Counter(my_string)
    # 제거 결과
    result = ''
    
    for char in my_string:
        if counter[char]:
            result += char
            counter[char] = None

    return result
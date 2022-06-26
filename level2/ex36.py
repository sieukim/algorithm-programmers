from functools import cmp_to_key

# 정렬 비교 함수
def comparator(prev, curr):
    # 두 문자열을 붙인 뒤 비교 
    if prev + curr < curr + prev:
        return 1
    else:
        return -1

def solution(numbers):    
    # 정수 => 문자열
    numbers = [str(number) for number in numbers]
    
    # 정렬
    numbers.sort(key=cmp_to_key(comparator))
    
    # 리스트 => 문자열
    numbers = str(int("".join(numbers)))
    
    return numbers
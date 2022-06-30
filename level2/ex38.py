# 다중 집합 반환 함수 
def get_multiset(string):
    # 대문자로 변환
    string = string.upper()
    # 다중 집합 생성 
    multiset = ["".join((string[i], string[i+1])) for i in range(len(string) - 1)]
    # 공백, 숫자, 특수 문자 포함 요소 제거
    multiset = [value for value in multiset if value.isalpha()]
    
    # 다중 집합 반환
    return multiset

# 다중 집합의 교집합과 합집합의 크기 반환 함수
def get_size(multiset1, multiset2):    
    # 교집합 크기, 합집합 크기
    size1, size2 = 0, 0
    # 두 집합 내 모든 요소
    values = set(multiset1) | set(multiset2)
    
    for value in values:
        # 각 집합 내 개수
        count1, count2 = multiset1.count(value), multiset2.count(value)
        # 크기 계산
        size1 += min(count1, count2)
        size2 += max(count1, count2)
    
    return size1, size2

def solution(str1, str2):
    # 다중 집합
    multiset1 = get_multiset(str1)
    multiset2 = get_multiset(str2)
    
    # 모두 공집합인 경우
    if len(multiset1) == 0 and len(multiset2) == 0:
        return 65536
    
    # 교집합과 합집합의 크기
    size1, size2 = get_size(multiset1, multiset2)
    
    return size1 / size2 * 65536 // 1
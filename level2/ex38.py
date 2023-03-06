from math import floor

def solution(str1, str2):
    # 다중 집합 생성
    def init(str1):
        # 소문자 -> 대문자
        str1 = str1.upper()
        # 두글자씩 끊기
        group1 = [str1[i]+str1[i+1] for i in range(len(str1)-1)]
        # 공백이나 숫자, 특수 문자가 들어있는 단어 제거
        return list(filter(lambda x: x.isalpha(), group1))
    
    # 자카드 유사도 계산
    def calculate(set1, set2):
        # 사용 단어 set
        words = set(set1+set2)
        # 교집합 크기
        size1 = sum([min(set1.count(word), set2.count(word)) for word in words])
        # 합집합 크기
        size2 = sum([max(set1.count(word), set2.count(word)) for word in words])
        # 유사도 반환
        if words:
            return size1/size2
        else:
            return 1
    
    set1 = init(str1)
    set2 = init(str2)
    return floor(calculate(set1, set2)*65536)
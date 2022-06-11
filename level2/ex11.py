from functools import reduce

def solution(clothes):
    # {의상 종류: [의상 수]}
    obj = {}
    
    for name, type in clothes:
        # 의상 종류가 존재하는 경우
        if type in obj:
            # 의상 수 추가
            obj[type] += 1
        # 의상 종류가 존재하지 않는 경우
        else:
            # 의상 종류 추가
            obj[type] = 1
    
    # 조합의 수
    count = reduce(lambda a, b: a * (b + 1), list(obj.values()), 1)

    # 0개 조합은 제외
    return count - 1
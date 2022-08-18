from collections import defaultdict

def solution(survey, choices):
    # 검사 개수
    n = len(survey)
    # 검사 결과
    result = defaultdict(int)
    
    for i in range(n):
        # 검사 지표
        disagree, agree = survey[i]
        # 비동의
        if choices[i] < 4:
            result[disagree] += 4 - choices[i] % 4
        # 동의
        if choices[i] > 4:
            result[agree] += choices[i] % 4

    # 유형 종류
    types = [['R', 'T'],
             ['C', 'F'],
             ['J', 'M'],
             ['A', 'N']]
    # 검사 결과
    return "".join([a if result[a] >= result[b] else b for a, b in types])
    
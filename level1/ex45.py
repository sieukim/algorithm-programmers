def solution(strings, n):
    # 사전식 정렬
    sortedStrings = sorted(strings)
    # 조건 정렬
    sortedStrings = sorted(sortedStrings, key = lambda x: x[n])
    
    return sortedStrings
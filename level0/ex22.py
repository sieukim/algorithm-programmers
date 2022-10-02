from collections import Counter

def solution(arr):
    # 요소가 하나인 경우
    if len(arr) == 1:
        return arr[0]
    
    # 상위 최빈값 2개
    first, second = Counter(arr).most_common(2)
    
    # 상위 최빈값 2개의 빈도수가 같은 경우 -> 최빈값이 여러개 
    if first[1] == second[1]:
        return -1
    # 상위 최빈값 2개의 빈도수가 다른 경우 -> 최빈값이 1개
    else:
        return first[0]

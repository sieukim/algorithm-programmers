def solution(array, n):
    # 오름차순 정렬
    array.sort()
    # n과의 차이를 기준으로 오름차순 정렬
    array.sort(key=lambda x: abs(x-n))
    
    return array[0]
def solution(arr):
    # 최소값 찾기
    minValue = min(arr)
    # 최소값 제거 리스트
    answer = list(filter(lambda x: x != minValue, arr))
    return answer if len(answer) > 0 else [-1]
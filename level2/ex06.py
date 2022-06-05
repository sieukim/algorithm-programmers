def solution(s):
    # 공백을 기준으로 split
    arr = [int(value) for value in s.split(sep=" ")]
    # 오름차순 정렬
    arr.sort()
    # "(최솟값) (최댓값)" 반환
    return str(arr[0]) + ' ' + str(arr[-1])
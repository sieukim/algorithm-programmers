def solution(str):
    # 내림차순 정렬(반환 값 타입: 리스트)
    sortedStr = sorted(str, reverse=True)
    # 문자열로 변환
    return ''.join(sortedStr)
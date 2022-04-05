def solution(n):
    # 자릿수 내림차순 정렬(리스트)
    answer = sorted(list(str(int(n))), reverse=True)
    # 정수로 변환
    return int(''.join(answer))
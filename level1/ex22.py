def solution(n):
    # 문자열로 변환 후 뒤집기
    answer = str(n)[::-1]
    # 리스트로 변환
    answer = list(answer)
    # 정수형 리스트로 변환
    answer = list(map(int, answer))
    return answer
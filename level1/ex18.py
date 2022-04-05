from itertools import combinations

def solution(numbers):
    # 2개 요소로 이루어진 모든 조합 구하기
    comb = list(combinations(numbers, 2))
    # 2개 요소 합 구하기
    answer = list(map(lambda x: x[0] + x[1], comb))
    # 중복 제거 & 오름차순 정렬
    answer = sorted(list(set(answer)))
    return answer
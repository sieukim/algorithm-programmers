from collections import Counter, defaultdict

def solution(weights):
    # 1. n명으로 짝을 지을 때 가능한 쌍의 수를 구하는 함수 정의
    get_count = lambda x: x*(x-1)/2 if x > 1 else 0

    # 2. 모든 쌍의 수 구하기
    points = defaultdict(int)

    for weight in weights:
        for i in range(2, 5):
            points[weight*i] += 1

    count = sum([get_count(value) for value in points.values()])

    # 3. 같은 몸무게로 이루어진 쌍의 수 구하기
    #    2.에서 중복되어 세졌으므로 2를 곱해 빼야 함
    duplicated_count = sum([get_count(value) for value in Counter(weights).values()])*2

    return count - duplicated_count
from itertools import combinations

# 소수 판별 함수
def isPrime(num):
    if num < 2:
        return False
    if num < 4:
        return True
    if num % 2 == 0:
        return False
    if num % 3 == 0:
        return False
    for i in range(4, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

def solution(nums):
    # 3개 요소로 이루어진 조합 리스트
    combs = list(combinations(nums, 3))
    # 각 조합을 모든 요소의 합으로 변환
    combs = [sum(comb) for comb in combs]
    # 소수인 합의 개수 반환
    return len([comb for comb in combs if isPrime(comb)])
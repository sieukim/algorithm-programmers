from itertools import combinations

def solution(nums):
    # 소수 판별 함수
    def isPrime(num):
        if num <= 3:
            return True
        if num % 2 == 0:
            return False
        if num % 3 == 0:
            return False
        for i in range(4, int(num ** 0.5 + 1)):
            if num % i == 0:
                return False
        return True
        
    # 3개 요소로 이루어진 조합 리스트
    comb = list(combinations(nums, 3))
    # 각 조합의 합 리스트
    combSums = list(map(lambda x: sum(x), comb))
    # 중복 제거
    combSums = list(set(combSums))
    # 소수인 조합의 합 리스트
    primes = [combSum for combSum in combSums if isPrime(combSum)]
    return len(primes)
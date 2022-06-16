from itertools import permutations

# 소수 판별 함수
def is_prime(number):
    # 0, 1
    if number <= 1:
        return False
    
    for i in range(2, number):
        if number % i == 0:
            return False
    
    return True

def solution(numbers):
    # 소수 집합
    primes = set()
    
    for i in range(1, len(numbers) + 1):
        # i에 대한 순열 집합
        perms = set([int("".join(perm)) for perm in permutations(numbers, i)])
        
        # 소수 판별
        for perm in perms:
            # 소수인 경우
            if is_prime(perm):
                # 소수 집합에 추가 
                primes.add(perm)

    return len(primes)

from math import gcd
from functools import reduce

def solution(arr):
    # 두 수의 최소 공배수를 반환하는 함수
    # 두 수의 최소 공배수 = 두 수의 곱 / 두 수의 최대 공약수
    get_lcm = lambda x, y: int(x * y / gcd(x, y))
    
    return reduce(get_lcm, arr)
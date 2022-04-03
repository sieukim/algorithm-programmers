import math

def solution(n, m):
    # 최대 공약수
    gcd = math.gcd(n, m)
    # 최소 공배수
    lcm = n * m / gcd
    return [gcd, lcm]
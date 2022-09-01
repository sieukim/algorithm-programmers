from math import factorial

def solution(n):
    # Catalan Number => C(n) = (2n)! / (n! * (n+1)!)
    return factorial(2*n)/(factorial(n)*factorial(n+1))

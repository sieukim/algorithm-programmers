def solution(a, b):
    minValue = min(a, b)
    maxValue = max(a, b)
    return sum(range(minValue, maxValue + 1))
# 팰린드롬 판별 및 투포인터 확장
def expand(s, left, right):
    while left >= 0 and right < len(s) and s[left] == s[right]:
        left -= 1
        right += 1
    return right - left - 1

def solution(s):
    if len(s) < 2 or s == s[::-1]:
        return len(s)
    
    result = 0
    
    for i in range(len(s) - 1):
        result = max(result,
                     expand(s, i, i+1),
                     expand(s, i, i+2))

    return result
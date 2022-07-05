# 진법 변환 함수
def change_base(n, base=3, base_char='412'):
    div, mod = divmod(n, base)

    if mod % 3 == 0:
        div -= 1
    
    if div == 0:
        return base_char[mod]
    
    return change_base(div) + base_char[mod]

def solution(n):
    return change_base(n)
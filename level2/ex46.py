# 균형잡힌 괄호 문자열 확인 함수
def is_balanced(w):
    return w.count('(') == w.count(')')

# 올바른 괄호 문자열 확인 함수
def is_correct(w):
    count = 0
    
    for value in w:
        if value == '(':
            count += 1
        else:
            count -= 1
        
        if count < 0:
            return False
    
    return count == 0
    
# 주어진 문자열을 두 균형잡힌 괄호 문자열로 분리하는 함수
def split(w):
    for i in range(len(w)):
        u, v = w[:i+1], w[i+1:]  
        if is_balanced(u):
            return u, v
    
# 주어진 문자열의 괄호 방향을 뒤집어 반환하는 함수
def reverse(w):
    reversed = ''
    for value in w:
        if value == '(':
            reversed += ')'
        else:
            reversed += '('
    return reversed
    
# 균형잡힌 괄호 문자열 -> 올바른 괄호 문자열 변환 함수
def convert(w):
    if w == '':
        return w

    u, v = split(w)

    if is_correct(u):
        return u + convert(v)
    else:
        return '(' + convert(v) + ')' + reverse(u[1:-1])

def solution(p):
    return convert(p)
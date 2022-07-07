# 올바른 괄호 문자열 확인 함수 
def check(s):
    stack = []
    values = {')': '(', ']': '[', '}': '{'}

    for value in s:
        if value in values.values():
            stack.append(value)
        elif not stack:
            return False
        elif stack[-1] == values[value]:
            stack.pop()
            
    return len(stack) == 0

def solution(s):
    answer = 0
    
    # 왼쪽으로 i칸만큼 회전 
    for i in range(len(s)):
        if check(s):
            answer += 1
        s = s[1:] + s[0]
    
    return answer
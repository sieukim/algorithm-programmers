def solution(s):
    # 여는 괄호의 개수
    n = s.count('(')
    # 닫는 괄호의 개수
    m = s.count(')')
    
    # 두 괄호의 개수가 다른 경우
    if n != m:
        return False
    
    # 괄호 스택 
    stack = []
    
    # 문자열 탐색
    for value in s:
        # 여는 괄호인 경우
        if value == '(':
            # 스택에 삽입 
            stack.append(value)
        # 닫는 괄호인 경우
        else:
            # 스택에 여는 괄호가 존재하는 경우
            if len(stack) > 0:
                # 제거
                stack.pop()

    return len(stack) == 0
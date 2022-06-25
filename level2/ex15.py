def solution(s):
    # 길이가 홀수 => 절대 불가능
    if len(s) % 2 == 1:
        return 0
    
    # 스택
    stack = []
    
    for value in s:
        # 짝인 경우
        if stack and stack[-1] == value:
            stack.pop()
        # 짝이 아닌 경우
        else:
            stack.append(value)

    return 1 if len(stack) == 0 else 0
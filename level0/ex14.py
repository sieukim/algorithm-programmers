def solution(s):
    answer, stack = 0, []
    
    for v1 in s.split(' '):
        if stack and v1 == 'Z':
            v2 = stack.pop()
            answer -= v2
        else:
            answer += int(v1)
            stack.append(int(v1))
            
    return answer
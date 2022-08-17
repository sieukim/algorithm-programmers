def solution(number, k):
    # 내림차순으로 정렬된 경우
    if list(number) == sorted(number, reverse=True):
        return number[:-k]
    
    # 숫자를 담을 스택
    stack = []
    
    for value in number:
        # 뒤에서부터 탐색하며 value보다 작은 값 제거
        while stack and stack[-1] < value and k > 0:
            stack.pop()
            k -= 1
        stack.append(value)

    # 문자열로 반환 
    return "".join(stack)
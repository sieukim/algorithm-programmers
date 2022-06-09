def solution(priorities, location):
    # 요청한 문서의 출력 순서
    answer = 0
    
    # (우선 순위, 초기 위치)로 매핑
    priorities = [(priorities[i], i) for i in range(len(priorities))]
    
    while len(priorities) > 0:
        # 맨 앞 문서
        priority = priorities.pop(0)
        # 맨 앞 문서보다 우선순위가 높은 문서
        rest = [value for value in priorities if value[0] > priority[0]]
        # 우선순위가 높은 문서가 존재하는 경우
        if len(rest) > 0:
            # 맨 앞 문서를 맨 뒤에 삽입
            priorities.append(priority)
        else:
            # 출력
            answer += 1
            
            # 사용자가 요청한 문서인 경우
            if priority[1] == location:
                # 종료
                break
            
    return answer
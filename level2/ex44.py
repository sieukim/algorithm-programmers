def solution(people, limit):
    # 필요한 구명보트 개수
    answer = 0
    # 투 포인터
    left, right = 0, len(people) - 1
    
    # 몸무게를 기준으로 오름차순 정렬
    people.sort()
    
    while (left <= right):
        # 제한 이하 => 양쪽 범위 좁히기 
        if people[left] + people[right] <= limit:
            answer += 1
            left += 1
            right -= 1
        # 제한 초과 => 오른쪽 범위 좁히기  
        else:
            answer += 1
            right -= 1
            
    return answer
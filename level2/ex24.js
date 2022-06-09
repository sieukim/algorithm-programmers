function solution(priorities, location) {
    // 요청한 문서의 출력 순서 
    let answer = 0;
    
    // [우선순위, 초기 위치]로 매핑
    priorities = priorities.map((value, index) => [value, index]);
    
    while (priorities.length > 0) {
        // 맨 앞 문서 꺼내기
        const priority = priorities.shift();
        // 남은 문서 중 더 높은 우선순위 문서가 있는지 확인
        const rest = priorities.filter(value => value[0] > priority[0]);
        // 더 높은 우선순위가 있는 경우
        if (rest.length > 0) {
            // 맨 앞 문서를 맨 뒤에 삽입
            priorities.push(priority);
        }
        else {
            // 출력
            answer += 1;
            
            // 사용자가 요청한 문서인 경우   
            if (priority[1] === location) {
                // 종료
                break;
            }
        }
    }
    
    return answer;
}
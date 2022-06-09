function solution(progresses, speeds) {
    const answer = [];
    
    // 필요 작업일 
    const days = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));

    while (days.length > 0) {
        // 배포 작업 수 
        let count = 0;
        // 맨 앞 작업을 배포 
        const day = days.shift();
        count += 1;
        // 위 작업일보다 같거나 빠른 작업을 배포
        while (days[0] <= day) {
            days.shift();
            count += 1;
        }
        // 배포 작업 수 추가
        answer.push(count);
    }
    
    return answer;
}
function solution(survey, choices) {
    // 검사 개수
    const n = survey.length;
    // 검사 결과
    const result = {
        'R': 0, 'T': 0,
        'C': 0, 'F': 0,
        'J': 0, 'M': 0,
        'A': 0, 'N': 0,
    };
    
    for (let i = 0; i < n; i++) {
        // 검사 지표
        const [disagree, agree] = survey[i].split('');
        // 무효
        if (choices[i] === 4) continue; 
        // 비동의
        if (choices[i] < 4) result[disagree] += 4 - choices[i] % 4;
        // 동의
        else result[agree] += choices[i] % 4;
    } 

    // 검사 결과
    let answer = '';
    
    answer += result['R'] >= result['T'] ? 'R' : 'T';
    answer += result['C'] >= result['F'] ? 'C' : 'F';
    answer += result['J'] >= result['M'] ? 'J' : 'M';
    answer += result['A'] >= result['N'] ? 'A' : 'N';
    
    return answer;
}
// n칸 미룬 아스키 코드 반환 함수
function getCode(n, ascii) {
    // n칸 미뤘을 때 아스키 코드
    let code = ascii;
    // 현재 문자의 대문자 여부
    const isUpper = ascii >= 65 && ascii <= 90;
    
    // n칸 미루기
    code += n;
    
    // 대문자일 때, 대문자 아스키 코드 범위를 넘은 경우
    if (isUpper && code > 90) {
        code -= 26;
    }
    // 소문자일 때, 소문자 아스키 코드 범위를 넘은 경우
    else if (!isUpper && code > 122) {
        code -= 26;
    }
    
    return code;
}

function solution(s, n) {
    let answer = '';
    
    for (let i = 0; i < s.length; i++) {
        // 공백인 경우
        if (s[i] === ' ') {
            answer += s[i];
            continue;
        }
        // n칸 미뤘을 때 문자의 아스키 코드
        const code = getCode(n, s.charCodeAt(i));
        // 문자로 변환
        answer += String.fromCharCode(code);
    }
    
    return answer;
}
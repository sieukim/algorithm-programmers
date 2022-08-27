function solution(user_id, banned_id) {
    // 문자열 -> 정규 표현식
    function convert(src, dest='') {
        return '^' + src.replace(/\*/g, '[a-z0-9]') + '$';
    }

    // 정규 표현식에 맞는 아이디 목록
    const matched_id = [];
    
    for (let i = 0; i < banned_id.length; i++) {
        const pattern = convert(banned_id[i]);
        const matched = [];
        for (let j = 0; j < user_id.length; j++) {
            if (user_id[j].match(pattern)) {
                matched.push(user_id[j]);
            }
        }
        matched_id.push(matched);
    }
    
    // 가능한 조합 목록
    const combs = new Set();
    
    function get_combs(ids, i=0, comb=[]) {
        if (i === ids.length) {
            if (comb.length === new Set(comb).size) {
                comb.sort();
                combs.add(comb.join(','));
            }
            return;
        }
        
        for (let j = 0; j < ids[i].length; j++) {
            get_combs(ids, i+1, [...comb, ids[i][j]]);
        }
    }
    
    get_combs(matched_id);
    return combs.size;
}


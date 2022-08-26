function solution(enroll, referral, seller, amount) {
    // 이름: {추천인, 판매 금액}
    const info = {};
    
    for (let i = 0; i < enroll.length; i++) {
        info[enroll[i]] = {
            referral: referral[i],
            amount: 0,
        };
    }
    
    for (let i = 0; i < seller.length; i++) {
        let name = seller[i];
        let rest_amount = amount[i] * 100;
        
        while (name !== '-') {
            const next_amount = parseInt(rest_amount * 0.1);
            const current_amount = rest_amount - next_amount;
            
            if (next_amount < 1) {
                info[name]['amount'] += rest_amount;
                break;
            } else {
                info[name]['amount'] += current_amount;
                name = info[name]['referral'];
                rest_amount = next_amount;
            }
        }
    }
    
    return Object.keys(info).map(name => info[name]['amount']);
}
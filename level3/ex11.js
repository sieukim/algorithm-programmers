function solution(sticker) {
    // 스티커 개수
    const n = sticker.length;
    
    if (n === 1) {
        return sticker[0];
    }
    if (n === 2) {
        return Math.max(sticker[0], sticker[1]);
    }
    if (n === 3) {
        return Math.max(sticker[0] + sticker[2], sticker[1]);
    }
    
    // 첫 번째 스티커를 뜯어냈다고 가정
    const dp1 = new Array(n).fill(0);
    dp1[0] = sticker[0];
    dp1[1] = 0;
    dp1[2] = sticker[0] + sticker[2];
    for (let i = 3; i < n - 1; i++) {
        dp1[i] = Math.max(dp1[i - 3] + sticker[i], 
                           dp1[i - 2] + sticker[i],
                           dp1[i - 1]);
    }
    
    // 첫 번째 스티커를 안 뜯어냈다고 가정
    const dp2 = new Array(n).fill(0);
    dp2[0] = 0;
    dp2[1] = sticker[1];
    dp2[2] = Math.max(sticker[1], sticker[2]);
    for (let i = 3; i < n; i++) {
        dp2[i] = Math.max(dp2[i - 3] + sticker[i], 
                           dp2[i - 2] + sticker[i],
                           dp2[i - 1]);
    }

    return Math.max(dp1[n-2], dp2[n-1]);
}
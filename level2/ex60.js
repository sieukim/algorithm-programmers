function solution(N, road, K) {
    // 1번 마을 => i번 마을 최소 배달 시간
    const times = new Array(N+1).fill(Infinity);
    // 마을 이동 시간 그래프
    const graph = {};
    
    for (let i = 0; i < road.length; i++) {
        const [a, b, time] = road[i];
        graph[a] = graph[a] ? [...graph[a], [b, time]] : [[b, time]];
        graph[b] = graph[b] ? [...graph[b], [a, time]] : [[a, time]];
    }
    
    // 큐
    const q = [];
    
    // 1번 마을에 대해 초기화
    times[1] = 0;
    q.push(1);
    
    // bfs 
    while (q.length > 0) {
        const a = q.shift();
        for (let i = 0; i < graph[a].length; i++) {
            const [b, time] = graph[a][i];
            if (times[b] > times[a] + time) {
                times[b] = times[a] + time;
                q.push(b);
            }
        }
    }
    
    return times.filter(value => value <= K).length;
}
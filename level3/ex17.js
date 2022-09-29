function solution(tickets) {
    // 그래프 초기화 함수
    function init(arr) {
        const graph = {};
        
        for (const [a, b] of arr) {
            if (graph[a]) graph[a].push(b);
            else graph[a] = [b];
        }
        
        return graph;
    }
    
    // 그래프 정렬 함수
    function sort(graph) {
        for (const key in graph) {
            graph[key].sort();
        }
        
        return graph;
    }
    
    // 종료 조건 확인 함수
    function isEnd() {
        for (const key in graph) {
            if (graph[key].length > 0) {
                return false;
            }
        }
        
        return true;
    }
    
    function dfs(airportFrom='ICN', visited=['ICN']) {
        // 모든 경로를 거친 경우
        if (isEnd()) {
            answer.push(visited);
            return 
        }
        
        if (graph[airportFrom]) {
            const n = graph[airportFrom].length; 

            for (let i = 0; i < n; i++) {
                const airportTo = graph[airportFrom].shift();
                dfs(airportTo, [...visited, airportTo]);
                graph[airportFrom].push(airportTo);
            }
        }
    }
    
    const answer = [];
    const graph = sort(init(tickets));
    dfs();
    return answer[0];
}
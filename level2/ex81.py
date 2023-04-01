from heapq import heapify, heappop

def solution(picks, minerals):
    # 최대힙 구성
    def maxheapify(arr):
        arr = [(-value[0], value[1]) for value in arr]
        heapify(arr)
        return arr
    # 최대힙 pop
    def maxheappop(arr):
        value = heappop(arr)
        return (-value[0], value[1])
    
    # [구간별 최대 피로도의 합, 구간별 광물 리스트] 정보 가져오기
    def get_info(minerals):
        # key: 광물
        # value: 최대 피로도
        max_degree = {'diamond': 25, 'iron': 5, 'stone': 1}
        # [구간별 최대 피로도의 합, 구간별 광물 리스트] 
        return  [(sum([max_degree[mineral] for mineral in minerals[i:i+5]]), minerals[i:i+5]) for i in range(0, len(minerals), 5)]
    
    # 곡괭이 선택
    def get_pick(picks):
        for pick in ['diamond', 'iron', 'stone']:
            if picks[pick] > 0:
                return pick
            
    # 피로도 합 계산
    def calculate(pick, sub_mineral):
        if pick == 'diamond':
            degree = {'diamond': 1, 'iron': 1, 'stone': 1}
        elif pick == 'iron':
            degree = {'diamond': 5, 'iron': 1, 'stone': 1}
        else:
            degree = {'diamond': 25, 'iron': 5, 'stone': 1}
        return sum([degree[mineral] for mineral in sub_mineral])
    
    # 총 곡괭이 수 
    n = sum(picks)
    # 캘 수 있는 광물까지 슬라이싱
    minerals = minerals[:n*5]    
    # key: 곡괭이
    # value: 개수
    picks = {'diamond': picks[0], 'iron': picks[1], 'stone': picks[2]}
    # 최대 피로도를 기준으로 최대힙 구성
    info = get_info(minerals)
    info = maxheapify(info)
    # 누적 피로도
    cum_degree = 0
    
    while info:
        _, sub_minerals = maxheappop(info)
        pick = get_pick(picks)
        if pick:
            picks[pick] -= 1
            cum_degree += calculate(pick, sub_minerals)
        
    return cum_degree
    
    
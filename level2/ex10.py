from queue import deque

def solution(cacheSize, cities):
    # 실행 시간 
    answer = 0
    # 캐시
    cache = deque(maxlen=cacheSize)
    # 소문자로 변환
    cities = [city.lower() for city in cities]
    
    for city in cities:
        # 캐시 hit
        if city in cache:
            cache.remove(city)
            cache.append(city)
            answer += 1
        # 캐시 miss
        else:
            cache.append(city)
            answer += 5
            
    return answer
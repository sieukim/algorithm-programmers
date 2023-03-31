from heapq import heapify, heappop, heappush

def solution(book_time):
    # [시작 시각(문자열), 종료 시각(문자열)] -> [시작 시각(분 단위), 종료 시각(분 단위)]
    def convert(start, end):
        calc = lambda time: time[0]*60+time[1]
        start = calc(list(map(int, start.split(':'))))
        end = calc(list(map(int, end.split(':'))))
        return [start, end]
    
    # 대실
    def rent(rooms, start, end):
        # 사용한 방이 없는 경우
        if not rooms:
            return rooms.append(end)
        # 대실 불가능한 방 리스트
        impossible = []
        # 종료 시각이 빠른 순으로 탐색하며
        # 대실 가능한 방을 찾아 제거
        while rooms:
            room = heappop(rooms)
            if room+10 <= start:
                break
            else:
                impossible.append(room)
        # 새로운 방 대실
        heappush(rooms, end)
        # 대실 불가능한 방 복구
        while impossible:
            room = impossible.pop()
            heappush(rooms, room)
        
    # 시작 시각을 기준으로 최소힙 구성
    book_time = [convert(start, end) for start, end in book_time]
    heapify(book_time)
    # 종료 시각을 기준으로 최소힙 구성
    rooms = []
    
    while book_time:
        start, end = heappop(book_time)
        rent(rooms, start, end)

    return len(rooms)
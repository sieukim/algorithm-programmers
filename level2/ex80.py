from heapq import heapify, heappop

class Assignment():
    def __init__(self, plan):
        name, start, duration = plan
        start = list(map(int, start.split(':')))
        start = start[0]*60+start[1]
        self.name = name
        self.start = start
        self.duration = int(duration)

def solution(plans):
    # [이름, 시작 시각, 걸리는 시간] -> [시작 시각, Assignment 객체]
    def convert(plan):
        assignment = Assignment(plan)
        return [assignment.start, assignment]
    
    # 시작 시각을 기준으로 최소힙 구성
    plans = [convert(plan) for plan in plans]
    heapify(plans)
    # 진행 중인 과제
    ongoing = None
    # 잠시 멈춘 과제 리스트
    stopped = []
    # 끝낸 과제 리스트
    ended = []

    while plans:
        # 새로운 과제 정보
        start, plan = heappop(plans)
        if ongoing:
            # 진행 중인 과제 종료 시각
            end = ongoing.start+ongoing.duration
            # 진행 중인 과제: 멈춤
            if start < end:
                ongoing.duration -= start-ongoing.start
                stopped.append(ongoing)
            # 진행 중인 과제: 종료 
            elif start == end:
                ended.append(ongoing.name)
            # 진행 중인 과제: 이전에 종료
            # 멈춰둔 과제: 최대한 실행
            else:
                ended.append(ongoing.name)
                cumtime = start-end
                while stopped:
                    stopped_plan = stopped.pop()
                    cumtime -= stopped_plan.duration
                    # 멈춰둔 과제: 모두 실행
                    if cumtime >= 0:
                        ended.append(stopped_plan.name)
                    # 멈춰둔 과제: 일부 실행
                    else:
                        stopped_plan.duration = -cumtime
                        stopped.append(stopped_plan)
                        break
        ongoing = plan

    return ended + [ongoing.name] + [stopped_plan.name for stopped_plan in stopped[::-1]]
from math import ceil 

def solution(progresses, speeds):
    answer = []
    
    # 작업 개수
    n = len(progresses)
    
    # 필요 작업일
    days = [ceil((100 - progresses[i]) / speeds[i]) for i in range(n)]
    
    # 작업 배포
    while len(days) > 0:
        # 배포 작업 수 
        count = 0
        # 맨 앞 작업 배포
        day = days.pop(0)
        count += 1
        # 남은 작업 중 같거나 빨리 끝난 작업을 배포
        while (len(days) > 0 and days[0] <= day):
            days.pop(0)
            count += 1
        # 배포 작업 수 추가 
        answer.append(count)
    
    return answer
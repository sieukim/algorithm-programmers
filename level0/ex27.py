def solution(score):
    # 등수 계산 함수
    def rank(x, avg):
        return len([v for v in avg if v > x])+1
        
    # 평균 리스트
    avg = [sum(student)/len(student) for student in score]
    # 등수로 매핑
    return list(map(lambda x: rank(x, avg), avg))
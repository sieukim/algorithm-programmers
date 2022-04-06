# 앞, 뒤 학생 여벌 확인 함수
# index: 현재 학생 위치
# before, after: 앞, 뒤 학생 존재 유무
def check(students, index, before, after):
    # 앞 학생이 여벌을 가진 경우
    if before and students[index - 1] == 2:
        students[index - 1] = 1
        students[index] = 1
    # 뒤 학생이 여벌을 가진 경우
    elif after and students[index + 1] == 2:
        students[index + 1] = 1
        students[index] = 1

def solution(n, lost, reserve):
    # 학생 리스트(값: 체육복 수)
    students = [1 for i in range(n + 1)] # 크기 n + 1, students[0]은 사용 x
    # 도난 적용
    students = [students[i] - 1 if i in lost else students[i] for i in range(n + 1)]
    # 여분 적용
    students = [students[i] + 1 if i in reserve else students[i] for i in range(n + 1)]
    
    for i in range(1, n + 1):
        # 체육복이 없을 때
        if students[i] == 0:
            # 첫 번호 학생
            if i == 1:
                check(students, i, False, True)
            # 마지막 번호 학생
            elif i == n:
                check(students, i, True, False)
            # 중간 번호 학생
            else:
                check(students, i, True, True)
    
    return n - students.count(0)
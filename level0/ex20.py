def solution(emergency):
    # 응급도 -> [응급도, 환자 번호]
    emergency = [[val, i] for i, val in enumerate(emergency)]
    # 응급도를 기준으로 내림차순 정렬
    emergency.sort(key=lambda x: -x[0])
    # [응급도, 환자 번호] -> [응급도, 환자 번호, 진료 순서]
    emergency = [[val[0], val[1], i+1] for i, val in enumerate(emergency)]
    # 환자 번호를 기준으로 오름차순 정렬
    emergency.sort(key=lambda x: x[1])
    # 진료 순서만 반환
    return [val[2] for val in emergency]
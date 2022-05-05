from math import ceil

def solution(fees, records):
    # 기본 시간, 기본 요금, 단위 시간, 단위 요금
    default_time, default_fee, unit_time, unit_fee = fees
    
    # 각 주차 기록 문자열을 공백으로 잘라 리스트로 변환
    records = [record.split(' ') for record in records]
    
    # 자동차 번호: [입출차 내역 시간] 딕셔너리
    cars = {}
    
    # 주차 기록 딕셔너리 초기화
    for record in records:
        time, car, _ = record
        if car in cars:
            cars[car].append(time)
        else:
            cars[car] = [time]
    
    # 입차 후 출차 내역이 없는 기록에 '23:59' 추가
    for car in cars:
        # 출차 내역이 홀수개인 경우
        if len(cars[car]) % 2 == 1:
            cars[car].append('23:59')

    # 입차, 출차, 입차,.. 형식의 내역을
    # [입차, 출차], [입차, 출차],...로 매핑
    for car in cars:
        # 입출차 시간 리스트
        time_list = cars[car]
        # 매핑된 시간 리스트
        new_time_list = []
        
        for i in range(0, len(time_list), 2):
            new_time_list.append([time_list[i], time_list[i + 1]])
        cars[car] = new_time_list

    # 주차 시간 계산 함수
    def calculate_time(time_list):
        # 누적 주차 시간
        cum_time = 0
        
        for time in time_list:
            # 입차 시간, 출차 시간
            time_in, time_out = map(lambda x: x.split(':'), time)
            # 입차 시간(분)
            time_in = int(time_in[0]) * 60 + int(time_in[1])
            # 출차 시간(분)
            time_out = int(time_out[0]) * 60 + int(time_out[1])

            # 시간 차(분)
            time_diff = time_out - time_in

            # 누적 주차 시간 업데이트
            cum_time += time_diff
        
        # 누적 주차 시간 반환
        return cum_time
    
    # 주차 요금 구하기
    for car in cars:
        # 누적 주차 시간
        cars[car] = calculate_time(cars[car])
        # 기본 주차 시간 제외
        cars[car] -= default_time
        # 주차 요금
        if cars[car] <= 0:
            cars[car] = default_fee
        else:
            cars[car] = default_fee + ceil(cars[car] / unit_time) * unit_fee
        
    # 차량 번호를 기준으로 오름차순 정렬
    cars = sorted(cars.items())
    
    # 주차 요금 시르트 반환
    return [car[1] for car in cars]
        
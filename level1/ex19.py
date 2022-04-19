def solution(id_list, report_list, k):
    # 아이디 개수
    n = len(id_list)
    
    # {아이디: id_list 내 인덱스} 딕셔너리
    index_dict = {id_list[i]: i for i in range(n)}
    
    # 사용자 인덱스: [신고 유저 인덱스] 딕셔너리 초기화
    report_dict = {i: [] for i in range(n)}
    
    # 신고 내역 중복 제거 후 탐색
    for report in set(report_list):
        # [신고 유저 인덱스, 피신고 유저 인덱스]
        reporting_index, reported_index = map(lambda id: index_dict[id], report.split(' '))
        # report_dict 갱신
        report_dict[reported_index].append(reporting_index)
    
    # 처리 결과 메일 횟수 리스트
    mail_count = [0] * n
        
    for report in report_dict:
        # 신고 유저 인덱스 리스트
        reporting_list = report_dict[report]
        # 신고 유저가 k명 이상인 경우
        if len(reporting_list) >= k:
            # 신고 유저가 받는 메일 횟수 증가
            for reporting_index in reporting_list:
                mail_count[reporting_index] += 1
                
    return mail_count
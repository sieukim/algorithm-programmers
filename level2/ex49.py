def solution(phone_book):
    # 번호 길이를 기준으로 오름차순 정렬
    phone_book.sort(key=lambda phone: len(phone))

    # 번호 길이 리스트
    length_list = set([len(phone) for phone in phone_book])
    
    # prefix set
    prefix_set = set([])
    
    # 번호 순회
    for phone in phone_book:
        # 모든 번호 길이만큼 잘라 prefix 생성
        for length in length_list:
            prefix = phone[:length]
            # prefix set에 포함된 경우
            if prefix in prefix_set:
                return False
        prefix_set.add(phone)
        
    return True
def solution(phone_number):
    # 핸드폰 번호 길이
    n = len(phone_number)
    # 앞 (n - 4) 자리 번호
    frontNumber = '*' * (n - 4)
    # 뒤 4 자리 번호
    backNumber = phone_number[-4:]
    
    return frontNumber + backNumber
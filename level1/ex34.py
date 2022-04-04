import datetime

def solution(a, b):
    # 2016년 a월 b일
    date = datetime.datetime(2016, a, b)
    # 2016년 a월 b일의 요일 정보(영문)
    day = date.strftime('%A')
    # 요일 정보 3글자로 줄이고 대문자로 변환
    return day[:3].upper()
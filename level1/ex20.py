# 주어진 word의 짝수 인덱스는 대문자로,
# 홀수 인덱스는 소문자로 변환하는 함수
def convert(word):
    list = []
    for i in range(len(word)):
        converted = word[i].upper() if i % 2 == 0 else word[i].lower()
        list.append(converted)     
    return ''.join(list)
            

def solution(s):
    # 공백 기준으로 split하여 단어 배열 구하기
    words = s.split(' ')
    # 각 단어에 대하여 convert 함수 실행
    convertedWords = list(map(convert, words))
    return ' '.join(convertedWords)
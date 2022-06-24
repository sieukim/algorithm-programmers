from itertools import product

def solution(word):
    # 단어 리스트 
    words = []
    
    # 중복 순열 
    for i in range(1, 6):
        perms = ["".join(value) for value in product('AEIOU', repeat=i)]
        words += perms
    
    # 오름차순 정렬
    words.sort()
    
    return words.index(word) + 1
from collections import Counter

def solution(spell, dic):
    # spell에 담긴 알파벳을 한번씩만 모두 사용한 단어인지 확인 
    def check(word):
        # 길이가 다른 경우 
        if len(spell) != len(word):
            return False
        
        # word 내 문자의 개수 
        count = Counter(word)
        
        for char in spell:
            if count[char] != 1:
                return False
        
        return True
    
    for word in dic:
        if check(word):
            return 1
    
    return 2
def solution(babbling):
    # 발음 가능 여부 판단 함수
    def check(src):
        # 결과 스택
        dest = []
        
        for i in range(len(src)):
            for j in range(len(vocable)):
                # 일치 확인
                if src[i:].startswith(vocable[j]):
                    # 연속 확인
                    if dest and dest[-1] == vocable[j]:
                        return False
                    else:
                        dest.append(vocable[j])   
                        i += len(vocable[j])
                        break
        
        return src == "".join(dest)
    
    # 가능한 발음 조합
    vocable = ['aya', 'ye', 'woo', 'ma']    
    return sum([1 for word in babbling if check(word)])
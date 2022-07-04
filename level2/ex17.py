import re
from functools import cmp_to_key

# 파일명 split 함수 
def split(file):
    head = re.search(r'[A-Z \.\-]+', file).group()
    number = re.search(r'[0-9]+', file).group()    
    return head, number

# 정렬 비교 함수
def comparator(x, y):
    if x[0][0] > y[0][0]:
        return 1
    elif x[0][0] < y[0][0]:
        return -1
    else:
        return int(x[0][1]) - int(y[0][1])  

def solution(files):
    answer = []
    
    # 파일명 매핑
    new_files = [(split(files[i].upper()), i) for i in range(len(files))]
    # 파일명 정렬
    new_files.sort(key=cmp_to_key(comparator))
    # 파일명 매핑 
    answer = [files[index] for (_, index) in new_files]
    
    return answer
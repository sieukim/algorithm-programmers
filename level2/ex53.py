from math import factorial

def solution(n, k):
    answer = []
    number = [i for i in range(1, n+1)]
    
    for i in reversed(range(1, n+1)):
        div, k = divmod(k, factorial(i-1))
        
        if k == 0:
            answer.append(number.pop(div-1))
        else:
            answer.append(number.pop(div))
        
    return answer
def solution(cipher, code):
    return "".join([char for i, char in enumerate(cipher) if (i+1)%code==0])

def solution(n, arr1, arr2):
    # 주어진 숫자를 길이가 n인 이진수로 변환하는 함수
    def convert(n, number):
        # 이진수 변환
        bin_number = bin(number)
        # 0b 제거
        bin_number = bin_number[2:]
        # 길이 n으로 맞추기(남은 만큼 앞에 0추가)
        bin_number = '0' * (n - len(bin_number)) + bin_number
        # 반환
        return bin_number
    
    # 주어진 리스트 내 모든 숫자를 길이가 n인 이진수로 변환
    list1 = list(map(lambda number: convert(n, number), arr1))
    list2 = list(map(lambda number: convert(n, number), arr2))
    
    # 해독된 비밀지도
    decoded_map = [[0] * n for _ in range(n)] 

    for i in range(n):
        for j in range(n):
            # 둘 중 하나는 1(#)인 경우
            if '1' in [list1[i][j], list2[i][j]]:
                decoded_map[i][j] = '#'
            # 둘 다 1(#)이 아닌 경우
            else:
                decoded_map[i][j] = ' '
        # 문자열로 변경
        decoded_map[i] = "".join(decoded_map[i])
    
    return decoded_map
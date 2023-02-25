from math import log2, ceil

def solution(numbers):
    # 표현 가능 여부 판단
    def check_number(x):
        # 1. 이진수 변환
        y = bin(x)[2:]
        # 2. 자리수 계산
        n = len(y)
        # 3. 트리 깊이 계산
        depth = ceil(log2(n+1))
        # 4. 포화 이진 트리 구성
        tree = '0'*(2**depth-1-n) + y
        # 5. 포화 이진 트리 확인
        def check_tree(tree):
            n = len(tree)
            # 재귀 종료
            if n <= 1:
                return True
            # 부모 노드 인덱스
            parent = int((n-1)/2)
            # 자식 노드 인덱스
            left_child, right_child = int((n-3)/4), int((3*n-1)/4)
            # 유효성 확인
            if tree[parent] == '0':
                if tree[left_child] == '1':
                    return False
                if tree[right_child] == '1':
                    return False
            return check_tree(tree[:parent]) & check_tree(tree[parent+1:])
        # 6. 표현 가능 여부 반환
        if check_tree(tree):
            return 1
        else:
            return 0

    return [check_number(x) for x in numbers]
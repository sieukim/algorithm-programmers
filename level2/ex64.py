def solution(m, n, board):
    # 전치 
    def transpose(src):
        return [[src[j][i] for j in range(len(src))] for i in range(len(src[0]))]
    
    # 모든 2x2 블록 위치 반환 함수 
    def find(src):
        index = set()
        
        for i in range(len(src)-1):
            for j in range(len(src[i])-1):
                # 높이 차이 
                diff = len(src[i+1])-len(src[i])
                if j+diff < 0 or j+diff >= len(src[i+1]):
                    continue
                # 오른쪽
                if src[i][j] != src[i][j+1]:
                    continue
                # 아래
                if src[i][j] != src[i+1][j+diff]:
                    continue
                # 대각선
                if src[i][j] != src[i+1][j+diff+1]:
                    continue
                # 삭제 위치 추가 
                index.add((i, j))
                index.add((i, j+1))
                index.add((i+1, j+diff))
                index.add((i+1, j+diff+1))
                
        return index
    
    # 모든 2x2 블록 삭제 함수 
    def remove(src, index):
        dest = []
        
        for i in range(len(src)):
            dest.append([])
            for j in range(len(src[i])):
                if (i, j) in index:
                    continue
                dest[i].append(src[i][j])

        return dest
    
    answer = 0
    board = transpose(board)
        
    while True:
        index = find(board)
        if len(index) == 0:
            break
        answer += len(index)
        board = remove(board, index)
        
    return answer
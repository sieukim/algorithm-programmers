from sys import maxsize

def solution(line):
    # 모든 별(교점)의 위치와 좌표의 크기를 반환하는 함수
    def get_stars(line):
        stars = set()
        # 직선 개수
        n = len(line)
        # x, y 좌표의 최소 값과 최대 값
        min_x, max_x, min_y, max_y = maxsize, -maxsize-1, maxsize, -maxsize-1
        
        for i in range(n):
            a, b, e = line[i]
            for j in range(i+1, n):
                c, d, f = line[j]
                # 평행 or 일치 
                if a * d - b * c == 0:
                    continue
                # 교점의 위치
                x = (b * f - e * d) / (a * d - b * c)
                y = (e * c - a * f) / (a * d - b * c)
                # 정수 좌표만 추가 
                if x % 1 == 0 and y % 1 == 0:
                    x = int(x)
                    y = int(y)
                    stars.add((x, y))
                    min_x = min(min_x, x)
                    max_x = max(max_x, x)
                    min_y = min(min_y, y)
                    max_y = max(max_y, y)
        
        # set -> list
        stars = [(x, y) for x, y in stars]
        
        # 모든 좌표가 양수 값을 갖도록 평행이동
        for i, (x, y) in enumerate(stars):
            stars[i] = (x-min_x, -(y-max_y))
    
        return stars, max_y - min_y + 1, max_x - min_x + 1
    
    # 좌표 공간 위에 모든 별을 그리는 함수 
    def draw_stars(line):
        # 모든 별
        stars, n, m = get_stars(line)
        # 좌표 공간
        space = [['.'] * m for _ in range(n)]

        for x, y in stars:
            space[y][x] = '*'
        
        return ["".join(row) for row in space]   

    return draw_stars(line)
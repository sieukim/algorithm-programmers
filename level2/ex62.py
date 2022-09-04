from itertools import permutations

def solution(expression):
    def split(src):
        dest, num = [], ''
        
        for value in src:
            if value.isdigit():
                num += value
            else:
                dest.append(int(num))
                dest.append(value)
                num = ''
        
        return dest + [int(num)]
    
    def calculate(src, op):
        dest = []
        index = [i for i, value in enumerate(src) if value == op]

        for i, value in enumerate(src):
            if i in index:
                if op == '+':
                    dest[-1] += src[i+1]
                if op == '-':
                    dest[-1] -= src[i+1]
                if op == '*':
                    dest[-1] *= src[i+1]
            elif i-1 in index:
                continue
            else:
                dest.append(value)
            
        return dest
    
    def find_max(src, ops=['+', '-', '*']):
        result = []
        perms = permutations(ops)
        
        for perm in perms:
            dest = split(src)
            dest = calculate(dest, perm[0])
            dest = calculate(dest, perm[1])
            dest = calculate(dest, perm[2])
            result.append(abs(dest[0]))

        return max(result)
    
    return find_max(expression)
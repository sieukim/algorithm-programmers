def solution(common):
    def get_next_value():
        diff = [common[i+1]-common[i] for i in range(len(common)-1)]
        ratio = [common[i+1]/common[i] for i in range(len(common)-1) if common[i] != 0]
        
        if len(set(diff)) == 1:
            return common[-1]+diff[0]
        if len(set(ratio)) == 1:
            return common[-1]*ratio[0]
    
    return get_next_value()
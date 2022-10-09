class Node(object):
    def __init__(self, key, level=0):
        self.key = key # 노드 정보 (소문자 알파벳)
        self.level = level # 해당 노드의 레벨 
        self.data = None # 해당 노드를 터미널 노드로 갖는 문자열
        self.children = {} # 자식 노드 딕셔너리
        self.count = 0 # 자식 노드의 수 

class Trie(object):
    def __init__(self):
        self.head = Node(None)
        
    # 문자열 삽입 
    def insert(self, data):
        node = self.head
        
        for key in data: 
            if key not in node.children:
                # 자식 노드 생성
                node.children[key] = Node(key, node.level+1)
            # 현재 노드 갱신
            node.count += 1
            node = node.children[key]
            
        node.data = data
    
    # 문자열 탐색
    def search(self, data):
        node = self.head
        
        for key in data:
            # 더이상 탐색이 불가능한 경우
            if key not in node.children:
                return 0
            # 더이상 입력이 불필요한 경우
            # 어떤 문자열의 터미널 노드가 아니면서
            # 자식 노드가 하나밖에 없어야 함 
            if not node.data and node.count == 1:
                break
            node = node.children[key]
            
        return node.level

def solution(words):
    answer = 0
    trie = Trie()
    
    for word in words:
        trie.insert(word)

    for word in words:
        answer += trie.search(word)
    
    return answer
    

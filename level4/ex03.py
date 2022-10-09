from collections import defaultdict

class Node(object):
    def __init__(self, key):
        self.key = key # 노드 정보
        self.keys = defaultdict(int) # 해당 노드를 거치는 문자열 정보 {길이: 개수}
        self.data = None # 해당 노드를 터미널 노드로 같은 문자열
        self.children = {} # 자식 노드 딕셔너리
        
class Trie(object):
    def __init__(self):
        self.head = Node(None)
        
    # 문자열 삽입
    def insert(self, data):
        node = self.head
        
        for key in data:
            if key not in node.children:
                node.children[key] = Node(key)
            node.keys[len(data)] += 1
            node = node.children[key]
            
        node.data = data
        
    # 문자열 탐색
    def search(self, data, n):
        node = self.head
        
        for key in data:
            if key not in node.children:
                return 0
            node = node.children[key]
        
        return node.keys[n]

def solution(words, queries):
    result = []
    pref_trie = Trie() # 와일드카드가 앞에 위치
    post_trie = Trie() # 와일드카드가 뒤에 위치
    
    for word in words:
        pref_trie.insert(word)
        post_trie.insert(word[::-1])
    
    for query in queries:
        data, n = query.strip('?'), len(query)
        if query[-1] == '?':
            count = pref_trie.search(data, n)
        else:
            count = post_trie.search(data[::-1], n)
        result.append(count)
    
    return result
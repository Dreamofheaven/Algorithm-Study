# 백준 - 17484번 진우의 달 여행

N, M = map(int, input().split())

fuel = []
res = 0

dy = [-1, 0, 1]

for _ in range(N):
    fuel.append(list(map(int, input().split())))

for x in range(N, 0, -1):
    if x == N:
        print(f"첫번째 최소값 : {min(fuel[x-1])}")
        res += min(fuel[x-1])
        y_idx = fuel[x-1].index(min(fuel[x-1]))
    else:
        y_idx 
    

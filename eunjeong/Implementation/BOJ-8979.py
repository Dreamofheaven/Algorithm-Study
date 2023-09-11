# 백준 8979번 - 올림픽

N, K = map(int, input().split())
record = []

for _ in range(N):
    tmp = list(map(int, input().split()))
    record.append(tmp)
print(record)
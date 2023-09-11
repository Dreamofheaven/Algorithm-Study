# 백준 8979번 - 올림픽

N, K = map(int, input().split())
record = []

for _ in range(N):
    tmp = list(map(int, input().split()))
    record.append(tmp)
record.sort(key = lambda x : (x[1], x[2], x[3]), reverse=True)

idx = [record[i][0] for i in range(N)].index(K)

for i in range(N):
    if record[idx][i:] == record[i][i:]:
        print(i+1)
        break

# 블로그 참고 함 이게 어떻게 초등부 문제??ㅠㅠ

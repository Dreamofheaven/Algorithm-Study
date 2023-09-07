# 백준 1931번-회의실 배정
import sys
input = sys.stdin.readline

N = int(input())
meeting = []

for _ in range(N):
    a, b = map(int, input().split())
    meeting.append((a, b))

meeting.sort(key=lambda x : x[0])
meeting.sort(key=lambda x : x[1])

cnt = 1
end = meeting[0][1]
for i in range(1, N):
    if meeting[i][0] >= end:
        cnt += 1
        end = meeting[i][1]

print(cnt)

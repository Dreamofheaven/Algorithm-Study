# 백준 2751번-수 정렬하기2
import sys

input = sys.stdin.readline

N = int(input())
res_list = []

for _ in range(N):
    n = int(input())
    res_list.append(n)

res_list.sort()

for i in res_list:
    print(i)

# 숏코딩 찾아보니까 이렇게 했음
# print(*sorted(map(int,[*open(0)][1:])))
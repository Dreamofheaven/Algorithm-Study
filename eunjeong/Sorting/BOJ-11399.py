# 백준 11399번-ATM

import sys
input = sys.stdin.readline

N = int(input())
P = sorted(map(int, input().split()))

tmp = 0
res = []

for i in P:
    tmp += i
    res.append(tmp)

print(sum(res))
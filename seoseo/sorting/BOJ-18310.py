#안테나

import sys
input = sys.stdin.readline

n = int(input())
n_list = list(map(int,input().split()))

#효율성을 위해 안테나로부터 모든 집까지의 거리의 총 합이 최소가 되도록 설치
#집 위치한 곳만 설치가능

n_list.sort()
# 중간 값이 가장 최소임
print(n_list[(n-1)//2])

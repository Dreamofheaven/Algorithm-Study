# 랜선 자르기

import sys
input = sys.stdin.readline

k,n = input().split()
# k 이미 가지고 있는 랜선 개수 , n 필요한 개수

k_list = []
for i in range(int(k)):
    k_list.append(int(input()))

# 랜선을 모두 N개의 같은 길이의 랜선으로 만들고 싶었기 때문에 K개의 랜선을 잘라서 만들어
# N개보다 많이 만드는 것도 N개를 만드는 것에 포함
# 만들 수 있는 최대 랜선의 길이 구하라

str = 1
end = max(k_list)
result = 0

while str <= end:
    mid = (str+end) // 2
    cnt = 0

    # 랜선 자르기
    for i in k_list:
        cnt += i//mid
    
    if cnt >= int(n) : # mid를 더 늘려
        result = mid
        str = mid +1
    else:
        # mid 더 줄여서 랜선개수 늘려!!
        end = mid -1
print(result)

#효율적인 화폐구성

n,m = map(int,input().split())
array = []
for i in range(n):
    array.append(int(input()))

# m원을 만들기 위한 최소한의 화폐개수

dp= [10001]*10001
dp[0] = 0

for i in range(n):
    for j in range(array[i],m+1):
        if dp[j-array[i]]!=10001:
            dp[j] = min(dp[j],dp[j-array[i]]+1)

if dp[m] == 10001:
    print(-1)
else:
    print(dp[m])
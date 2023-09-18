# 개미전사
n= int(input())
n_list = list(map(int,input().split()))

dp = [0]*100

dp[0] = n_list[0]
dp[1] = max(dp[0],n_list[1])


#1,3 의 합과 2번쨰 식량 창고중 max값
for i in range(2,n):
    dp[i] = max(dp[i-1],dp[i-2]+n_list[i])

print(dp[n-1])
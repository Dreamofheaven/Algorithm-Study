# 백준 9655번 - 돌게임

N = int(input())

# 1 ≤ N ≤ 1000
dp = [0] * 10001

dp[1] = 1 # sk 승
dp[2] = 0 # cy 승
dp[3] = 1 # sk 승

for i in range(4, N+1):
    if dp[i-1] == 1 or dp[i-3] == 1:
        dp[i] = 0
    else:
        dp[i] = 1

if dp[N] == 1:
    print('SK')
else:
    print('CY') 
    


# 40분 정도 고민하고 검색해봄
# 1로 만들기
# 1를 만들기 위한 최솟값 출력
n = int(input())

dp_table =[0]*30001

for i in range(2,n+1):
        # 현재 값에서 -1 을 했을 때가 최소 연산 횟수라고 가정하고, 
    # 해당 값에서 +1 함으로써, 현재 값까지의 최소 연산 횟수를 default로 지정
    dp_table[i] = dp_table[i-1]+1

    if dp_table[i] %5 == 0:
        # -1 경우와 나누어떨어지는 경우를 비교
        dp_table[i] = min(dp_table[i],dp_table[i//5]+1)

    if dp_table[i] %3 == 0:
        dp_table[i] = min(dp_table[i],dp_table[i//3]+1)

    if dp_table[i] %2 == 0:
        dp_table[i] = min(dp_table[i],dp_table[i//2]+1)

print(dp_table[n])

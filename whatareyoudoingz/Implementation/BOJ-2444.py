# 별 찍기 - 7
n=int(input())
ans=[' ' for _ in range(2*n-1)]
for i in range(2*n-1):
    s=(2*n-1)//2
    if i<=s:
        ans[s]='*'
        ans[s-i]='*'
        ans[s+i]='*'
    else:
        k=(2*n-1)-i
        ans[s-k]=' '
        ans[s+k]=' '
    print("".join(ans).rstrip(),end="\n")

# 불필요한 공백 줄여야 됨! 
# 다른 풀이 : for문 2개를 사용해서 바로 출력함. => 간단
n = int(input())
for i in range(1,n+1):
    print(' '*(n-i)+'*'*(2*i-1))
for k in range(n-1, 0 , -1):
    print(" "*(n-k)+"*"*(2*k-1))
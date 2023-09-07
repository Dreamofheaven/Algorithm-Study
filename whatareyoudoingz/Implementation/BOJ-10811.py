n,m=map(int,input().split())
ans=list(range(1,n+1))
for _ in range(m):
    a,b=map(int,input().split())
    result=ans[a-1:b]
    for i in range(a-1,b):
        ans[i]=result[-1]
        result.pop(-1)
print(*ans)

# 다른 풀이 : 역전 코드를 for문 대신 인덱싱으로 해결 => 깔끔
a[i-1:j] = a[i-1:j][::-1]
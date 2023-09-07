# 공 바꾸기
n,m=map(int,input().split())
ans=[i for i in range(1,n+1)]
for _ in range(m):
    a,b=map(int,input().split())
    ans[a-1],ans[b-1]=ans[b-1],ans[a-1]
print(" ".join(str(j) for j in ans))
    
# 다른 풀이 : ans의 초기 코드가 다름, print할때 더 간단함.
ans=list(range(1,n+1))
print(*ans)
    
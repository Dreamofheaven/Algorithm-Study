m,n=map(int,input().split())
ans=[0 for _ in range(m)]
for _ in range(n):
    i,j,k=map(int,input().split())
    for w in range(i-1,j):
        ans[w]=k
print(' '.join(str(q) for q in ans))
# 색종이
ans=[[0 for _ in range(100)] for _ in range(100)]
for _ in range(int(input())):
    a,b=map(int,input().split())
    for i in range(10):
        for j in range(10):
            ans[a+i][b+j]=1
result=0      
for x in range(100):
    for y in range(100):
        if ans[x][y]==1:
            result+=1
print(result)

# 다른 풀이 : 출력 조건이 한줄로 간단하다. => count함수 사용
l = [[0 for _ in range(101)] for _ in range(101)]
n = int(input())
for _ in range(n):
    x, y = list(map(int, input().split()))
    for i in range(x, x+10):
        for j in range(y, y+10):
            l[i][j] = 1
print(sum(i.count(1) for i in l))
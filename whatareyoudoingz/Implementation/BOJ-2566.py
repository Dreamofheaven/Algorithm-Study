# 최댓값
answer=[]
max_ans,what=0,0
for i in range(9):
    ans=list(map(int,input().split()))
    max_ans=max(max_ans, max(ans))
    if max_ans == max(ans):
        what=i+1
        answer=ans
print(max_ans)
print(what, answer.index(max_ans)+1)

# 다른 풀이 : 이차원 리스트로 풀어감 => 이게 출제의도와 맞는 거 같음. 
a=[[0]*9 for _ in range(9)]
for i in range(9):
    a[i]=list(map(int,input().split()))
m=max(map(max,a))
print(m)
for i in range(9):
  for j in range(9):
    if a[i][j]==m:
      print(i+1,j+1)
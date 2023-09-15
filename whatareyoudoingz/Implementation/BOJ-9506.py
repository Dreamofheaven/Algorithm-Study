while True:
    n=int(input())
    if n==-1:
        break
    
    result=[]
    for i in range(1,n+1):
        if n%i==0 and n//i not in result:
            result.append(n//i)

    ans=f"{n} = 1"
    score=1
    for x in reversed(result[1:-1]):
        ans+=f" + {x}"
        score+=x

    print(ans if score==n else f"{n} is NOT perfect." )
    
    # 다른 사람 풀이
while True:
    n = int(input())
    if n == -1:
        break
        
    li = [i for i in range(1, int(n**1/2) + 1) if n % i == 0]
    if n == sum(li):
        print(n,"=",end=' ')
        print(*li, sep=" + ")
    else:
        print(n, "is NOT perfect.")
# 약수 구하기
n,k=map(int,input().split())
result=[]
for i in range(1,n+1):
    if n%i==0 and n//i not in result:
        result.append(n//i)
print(0 if len(result)<k else result[-k])

# 다른 풀이
n, k = map(int, input().split())
factors = [i for i in range(1, n+1) if n % i == 0]
print(factors[k-1] if len(factors) >= k else 0)
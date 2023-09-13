# 행렬 덧셈
n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n*2)]
for i in range(n):
    for j in range(m):
        print(arr[i][j] + arr[i+n][j], end=' ')
    print()
    
# print() 와 print(" ")는 다르다. print()는 공백을 출력, print(" ")는 띄어쓰기를 출력
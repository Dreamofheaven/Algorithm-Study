#나무를 필요한 만큼만 집으로 가져가려
# 높이의 최댓값을 구하
import sys
input = sys.stdin.readline

n,m = input().split()
# n 나무의 수, m 가져갈 나무의 길이
trees = list(map(int,input().split()))

result = 0
str = 1
end = max(trees)

while str<= end:
    mid = (str+end) //2
    total = 0

    # mid 만큼 나무를 자른다
    for i in trees:
        if mid < i:
            total += i-mid

    if total >= int(m): # end쪽으로 움직여, 나무가 충분하다!!
        str = mid +1
        result = mid 
    else:
        end = mid -1

print(result)

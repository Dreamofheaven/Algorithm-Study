import sys
input = sys.stdin.readline
n = int(input())

students = []

for i in range(n):
    students.append(input().split())

#  국어 내림차순
# 국어 같으면 영어 증가
# 국어 영어 같으면 수학 내림사춘
# 모두 같으면 사전순

# 1. 국어 내림차순 정렬
students.sort(key=lambda x: (-int(x[1]), int(x[2]),-int(x[3]),x[0]))

for i in students:
    print(i[0])
# 백준 1931번-회의실 배정
import sys

input = sys.stdin.readline

N = int(input())
meeting = []

for _ in range(N):
    a, b = map(int, input().split())
    meeting.append((a, b))

# 아직 덜품 ㅜㅜ

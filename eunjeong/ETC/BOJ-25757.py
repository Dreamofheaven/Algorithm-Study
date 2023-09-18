# 백준 - 25757번 임스와 함께하는 미니게임
import sys

N, game = map(str, sys.stdin.readline().split())

player_num = {'Y' : 1, 'F': 2, 'O': 3}
players = set()

for _ in range(int(N)):
    players.add(sys.stdin.readline())

print(len(players) // player_num[game])






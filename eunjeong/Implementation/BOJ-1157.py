# 백준 1157번 - 단어공부
import sys
word = sys.stdin.readline().upper().strip()
tmp = list(set(word))

res = []

for i in tmp:
    cnt = word.count(i)
    res.append(cnt)

if res.count(max(res)) > 1:
    print('?')
else:
    print(tmp[res.index(max(res))])


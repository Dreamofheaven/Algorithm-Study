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

# for i in tmp:
#     res[i] = word.count(i)

# max_word = [k for k, v in res.items() if max(res.values()) == v]

# if len(max_word) > 1:
#     print('!')
# else:
#     print(*max_word)

# 시간초과 오류 ㅠㅠ 수정해야함
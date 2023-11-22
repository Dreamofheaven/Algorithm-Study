# 백준 10799번 - 쇠막대기 (실버2)

brackets = "()(((()())(())()))(())"

stack = []
cnt = 0

for i in range(len(brackets)):
    if brackets[i] == '(':
        stack.append(brackets[i])
    else:
        if brackets[i-1] == '(':
            stack.pop()
            cnt += len(stack)
        else:
            stack.pop()
            cnt += 1


print(cnt)
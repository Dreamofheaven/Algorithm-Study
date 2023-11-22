# 2022 카카오 인턴쉽 - 두 큐 합 같게 만들기
from collections import deque

queue1 = [3, 2, 7, 2]
queue2 = [4, 6, 5, 1]

Q_sum = (sum(queue1) + sum(queue2)) // 2

q1 = deque(queue1)
q2 = deque(queue2)

# 큐1을 대상으로 잡고, 큐1의 합이 Q_sum이랑 같게 될 때가지 반복해주기
q1_sum = sum(q1)
answer = 0

while q1_sum != Q_sum:
    if q1_sum < Q_sum:
        item = q2.popleft()
        q1.append(item)
        q1_sum += item
        answer += 1
    else:
        item = q1.popleft()
        q1_sum -= item
        answer += 1

    if not q2:
        break

print(q1_sum, answer)



# 백준 - 4659번 비밀번호 발음하기

        # 모음이 하나라도 있어야하고
        # 모음 or 자음이 연속으로 3번 오면 안되고
        # 같은 글자가 2번 연속으로 오면 안되는데, ee와 oo는 허용

while True:
    password = input()

    for i in range(len(password) - 2):
        if password[i] in 'aeiou':

# 다른 문제 먼저 풀기



# 백준 - 4659번 비밀번호 발음하기

        # 모음이 하나라도 있어야하고
        # 모음 or 자음이 연속으로 3번 오면 안되고
        # 같은 글자가 2번 연속으로 오면 안되는데, ee와 oo는 허용
import re

while True:
    password = input()

    if password == 'end':
        break

    con1 = re.findall(r"a|e|i|o|u", password)
    con2 = re.findall(r"([a|e|i|o|u]{3})|([^a|e|i|o|u]{3})", password)
    con3 = re.findall(r"([a-df-np-z])\1", password)

    if len(con1) != 0 and len(con2) == 0 and len(con3) == 0:
        print(f"<{password}> is acceptable.")
    else:
        print(f"<{password}> is not acceptable.")

# 고민을 너무 오래해서, 결국 구글에 검색해서 블로그를 참고했다.
# re라는 라이브러리를 사용하고, 정규식을 사용하는데
# 정규식에 익숙하지 않아서 공부를 해야겠다.
        
            
        

# 다른 문제 먼저 풀기



# 2022 카카오 인턴쉽 성격유형 검사
# 내가 푼 것

list1 = ["AN", "CF", "MJ", "RT", "NA"]
list2 = [5, 3, 2, 7, 5]

matched_pairs = list(zip(list1, list2))

ans = ''

res = {
    'R' : 0,
    'T' : 0,
    'C' : 0,
    'F' : 0,
    'J' : 0,
    'M' : 0,
    'A' : 0,
    'N' : 0
}

for i in matched_pairs:
    score = i[1] - 4
    if score < 0:
        res[i[0][0]] += abs(score)
    else:
        res[i[0][1]] += score

res_list = list(res.items())

for j in range(0, len(res_list), 2):
    # 두번째께 더 크면 뒤어꺼를 ans에 더하고
    # 첫번째 것이 더 크거나 같으면 ans에 앞의 것을 더해야해서
    if res_list[j][1] < res_list[j+1][1]:
        ans += res_list[j+1][0]
    else:
        ans += res_list[j][0]    

print(ans)


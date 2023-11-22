
# 2022 카카오 인턴쉽 성격유형 검사
# 다른 사람 풀이

def solution(설문_조사_배열, 선택지_배열):
    지표 = {}
    지표['RT'] = 지표['TR'] = {'R': 0, 'T': 0,}
    지표['FC'] = 지표['CF'] = {'C': 0, 'F': 0,}
    지표['MJ'] = 지표['JM'] = {'J': 0, 'M': 0,}
    지표['AN'] = 지표['NA'] = {'A': 0, 'N': 0,}
    점수 = {
        '매우 비동의': 3,
        '비동의': 2,
        '약간 비동의': 1,
        '모르겠음': 0,
        '약간 동의': 1,
        '동의': 2,
        '매우 동의': 3,
    }
    비동의 = [1, 2, 3]
    동의 = [5, 6, 7]
    선택지 = {
        1: '매우 비동의',
        2: '비동의',
        3: '약간 비동의',
        4: '모르겠음',
        5: '약간 동의',
        6: '동의',
        7: '매우 동의',
    }
    answer = ''

    for 인덱스 in range(len(설문_조사_배열)):
        비동의_캐릭터, 동의_캐릭터 = 설문_조사_배열[인덱스]

        if 선택지_배열[인덱스] in 비동의:
            지표[설문_조사_배열[인덱스]][비동의_캐릭터] += 점수[선택지[선택지_배열[인덱스]]]
            continue

        if 선택지_배열[인덱스] in 동의:
            지표[설문_조사_배열[인덱스]][동의_캐릭터] += 점수[선택지[선택지_배열[인덱스]]]

    결과_배열 = [지표['RT'].items(), 지표['FC'].items(), 지표['MJ'].items(), 지표['AN'].items()]
    정렬된_배열 = []

    for 결과 in 결과_배열:
        정렬된_배열.append(sorted(결과, key=lambda x: -x[1]))

    return ''.join([캐릭터_점수_튜플[0] for [캐릭터_점수_튜플, _] in 정렬된_배열])

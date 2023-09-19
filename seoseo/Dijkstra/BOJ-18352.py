#특정 거리의 도시 찾기
# https://www.acmicpc.net/problem/18352

import sys,heapq
input = sys.stdin.readline
INF = int(1e9)
n,m,k,x = map(int,input().split())
# 도시 X로부터 출발하여 도달할 수 있는 모든 도시 중에서, 
# 최단 거리가 정확히 K인 모든 도시들의 번호를 출력

graph = [[]for _ in range(n+1)]
distance = [INF]*(n+1)

for _ in range(m):
    a,b = map(int,input().split())
    graph[a].append((b,1))

def dijkstra(start):
    q=[]
    # 시작 노드로 가기 위한 최단거리는 0으로 설정, 큐에 삽입
    heapq.heappush(q,(0,start))
    distance[start] = 0
    while q: # 큐가 비어있지 않다면
        dist,now = heapq.heappop(q)

        #가장 최단거리가 짧은 노드에 대한 정보 꺼내기
        if distance[now] < dist: # 이미 처리되었으면 무지
            continue
        #인접한 노드 확인
        for j in graph[now]:
            cost = dist + j[1]

            #현재 노드를 거쳐서, 다른 노드로 이동하는 거리가 더 짧은 경우
            if cost < distance[j[0]]:
                distance[j[0]] = cost
                heapq.heappush(q,(cost,j[0]))

dijkstra(x)

answer = []

for i in range(1, n+1):
    if distance[i] == k: 
        answer.append(i)

if len(answer) == 0: print(-1)
else:
    for i in answer: print(i, end='\n')
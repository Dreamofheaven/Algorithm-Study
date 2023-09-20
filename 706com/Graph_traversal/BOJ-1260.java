// < 알고리즘 유형 >
// 그래프 탐색

// < 풀이 접근 >
// 1. 노드와 간선을 연결한다.
// 2. DFS 를 구현한다. (재귀 or Stack)
// 3. 초기화를 진행한다.
// 4. BFS 를 구현한다. (Queue)
// 5. 값을 출력한다.


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import java.util.StringTokenizer;
import java.util.Queue;
import java.util.LinkedList;

public class BOJ-1260 {

    static int N;
    static int M;
    static int V;

    static int[][] arr;
    static boolean[] visited;

    static StringBuilder sb = new StringBuilder();

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        V = Integer.parseInt(st.nextToken());

        arr = new int[N+1][N+1];
        visited = new boolean[N+1];

        // 노드-간선 연결
        for(int i=0; i<M; i++){
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());

            arr[a][b] = arr[b][a] = 1;
        }

        // DFS 수행
        dfs(V);
        sb.append('\n');

        // 초기화
        visited = new boolean[N+1];

        // BFS 수행
        bfs(V);

        System.out.println(sb);
    }
    static void dfs(int num){
        visited[num] = true;
        sb.append(num).append(" ");

        for(int i=1; i<=N; i++){
            if(!visited[i] && arr[num][i] ==1 ){
                dfs(i);
            }
        }
    }
    static void bfs(int num){
        Queue<Integer> q = new LinkedList<>();
        q.offer(num);
        visited[num] = true;

        while(!q.isEmpty()) {
            int node = q.poll();
            sb.append(node).append(' ');

            for (int i = 1; i <= N; i++) {
                if (!visited[i] && arr[node][i] == 1){
                    q.offer(i);
                    visited[i] = true;
                }
            }
        }
    }
}

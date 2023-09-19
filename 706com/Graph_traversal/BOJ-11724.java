// < 알고리즘 유형 >
// bfs-dfs

// < 풀이 접근 >
// *. bfs 로 구현
// 1. 노드와 간선을 맺어주는 인접행렬을 구현한다.
// 2. bfs 혹은 dfs 를 구현하여, 메서드에 들어갈 때 마다 갯수를 카운트 해준다.
// *. 방문처리와 갯수를 셀 때는 node 를 기준으로 생각하므로, 1차원배열로 생성한다.


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class _연결요소의개수 {

    static int N;
    static int M;
    static int[][] arr;
    static boolean[] visited;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());   //정점
        M = Integer.parseInt(st.nextToken());   //간선
        arr = new int[N + 1][N + 1];
        visited = new boolean[N + 1];

        // 인접행렬 간선-정점 잇기
        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            arr[a][b] = 1;
            arr[b][a] = 1;
        }

//        // 확인
//        for(int i=1; i<=N; i++){
//            for(int j=1; j<=N; j++){
//                System.out.print(arr[i][j]+" ");
//            }
//            System.out.println();
//        }

        int count = 0;

        for (int i = 1; i <= N; i++) {
            if (!visited[i]) {
                bfs(i);
                count++;
            }
        }
        System.out.println(count);
    }

    static void bfs(int x){
        Queue<Integer> q= new LinkedList<>();
        q.offer(x);

        visited[x] = true;

        while(!q.isEmpty()){
            int node = q.poll();
            for(int i=1; i<=N; i++){
                if(!visited[i] && arr[node][i] == 1){
                    q.offer(i);
                    visited[i] = true;
                }
            }
        }
    }
}


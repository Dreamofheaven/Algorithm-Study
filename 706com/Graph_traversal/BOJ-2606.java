import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

// < 알고리즘 유형 >
// 그래프 탐색

// < 풀이 접근 >
// 1. 노드와 간선을 연결한다.
// 2. DFS 를 구현한 후, 1번부터 탐색을 시작한다.
// 3. count 를 세주고 결과를 출력한다.

public class BOJ2606 {

    static int N;
    static int M;
    static int[][] arr;
    static boolean[] visited;
    static int count = 0;

    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        N = Integer.parseInt(br.readLine());
        M = Integer.parseInt(br.readLine());

        arr = new int[N+1][N+1];
        visited = new boolean[N+1];

        //노드-간선 연결
        for(int i=0; i<M; i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            arr[a][b] = arr[b][a] = 1;
        }

        dfs(1);

        System.out.println(count-1);
    }

    static void dfs(int num){
        visited[num] = true;
        count++;

        for(int i=1; i<=N; i++){
            if(!visited[i] && arr[num][i] == 1){
                dfs(i);
            }
        }
    }
}

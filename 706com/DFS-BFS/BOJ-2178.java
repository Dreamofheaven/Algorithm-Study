// < 알고리즘 유형 >
// bfs

// < 풀이 접근 >
// *. (1,1) 에서 출발 , 최단거리 -> bfs 구현
// 1. 미로를 표현하는 인접행렬을 구현한다.
// 2. 상대거리를 표현하는 배열을 만든다.
// 3. dist 배열을 구현하여, bfs 를 돌 때 마다의 거리를 넣어준다. (visited 의 용도로 활용가능)
// 4. 최종적으로 끝지점의 dist 값을 출력한다. (문제 특성상 +1 필요)


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class _2178_미로탐색 {

    static int N;
    static int M;

    static int[][] arr;
    static int[][] dist;

    static int[] dx = {0,0,-1,1};
    static int[] dy = {-1,1,0,0};

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine()," ");

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        arr = new int[N+1][M+1];
        dist = new int[N+1][M+1];

        // 미로 입력
        for(int i=1; i<=N; i++){
            String str = br.readLine();
            for(int j=1; j<=M; j++){
                int x = Character.getNumericValue(str.charAt(j-1));
                arr[i][j] = x;
            }
        }

//        // 확인
//        for(int i=1; i<=N; i++){
//            for(int j=1; j<=M; j++){
//                System.out.print(arr[i][j]);
//            }
//            System.out.println();
//        }

        for(int i=1;i<=N; i++){
            for(int j=1; j<=M; j++){
                bfs(1,1);
            }
        }
        System.out.println(dist[N][M]+1);
    }
    static void bfs(int x, int y){
        Queue<Node> q = new LinkedList<>();
        q.offer(new Node(x,y));

        while(!q.isEmpty()) {
            Node node = q.poll();
            for (int i = 0; i < 4; i++) {
                int nx = node.x + dx[i];
                int ny = node.y + dy[i];

                // 범위벗어남
                if(nx<1 || ny<1 || nx>N || ny>M){
                    continue;
                }
                if(arr[nx][ny] != 1 || dist[nx][ny] != 0){
                    continue;
                }
                q.offer(new Node(nx,ny));
                dist[nx][ny] = dist[node.x][node.y] + 1;
            }
        }
    }

    static class Node{
        int x;
        int y;
        Node(int x, int y){
            this.x = x;
            this.y = y;
        }
    }
}

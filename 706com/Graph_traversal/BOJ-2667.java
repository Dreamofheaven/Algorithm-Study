// < 알고리즘 유형 >
// bfs,dfs

// < 풀이 접근 >
// *. 구현하기 쉬운 dfs 로 푼다.
// 1. dfs에 들어오고 빠져나올 때 단지수를 카운트한다. (count)
// 2. dfs를 돌면서의 단지 내 집들을 카운트한다. (num)
// 3. num 들을 list 에 넣어 정렬한 후 , 출력한다.

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.StringTokenizer;

public class _2667_단지번호붙이기 {

    static int N;
    static int[][] arr;
    static boolean[][] visited;

    static int[] dx = {0,0,-1,1};
    static int[] dy = {-1,1,0,0};

    static int num = 0;

    public static void main(String[] args) throws IOException {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());

        arr = new int[N][N];
        visited = new boolean[N][N];

        // 단지입력
        for(int i=0; i<N; i++){
            String str = br.readLine();
            for(int j=0; j<N; j++){
                int c = Character.getNumericValue(str.charAt(j));
                arr[i][j]= c;
            }
        }

//        // 확인
//        for(int i=0; i<N; i++){
//            for(int j=0; j<N; j++){
//                System.out.print(arr[i][j]);
//            }
//            System.out.println();
//        }

        int count = 0;
        List<Integer> list = new ArrayList<>();
        for(int i=0; i<N; i++){
            for(int j=0; j<N; j++){
                if(arr[i][j] == 1 && !visited[i][j]) {
                    num=0;
                    dfs(i, j);
                    count++;
                    list.add(num);
                }
            }
        }

        Collections.sort(list);
        System.out.println(count);

        for(int x : list){
            System.out.println(x);
        }

    }
    static void dfs(int x, int y){
        visited[x][y] = true;
        num++;

        for(int i=0; i<4; i++){
            int nx = x + dx[i];
            int ny = y + dy[i];

            if(nx<0 || ny<0 || nx>=N || ny>=N){
                continue;
            }
            if(arr[nx][ny]==1 && !visited[nx][ny]){
                dfs(nx,ny);
            }
        }
    }
}

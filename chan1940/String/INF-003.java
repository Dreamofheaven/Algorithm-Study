import java.util.Scanner;

public class p13 {
    public String solution(String str){
        String answer="";
        //가장 긴 단어를 담기 위해 answer를 만들었음.
        int m = 0;
        String[] s = str.split(" ");
        for(String x : s){
            if(x.length()>m){
                m = x.length();
                answer=x;
            }
        }
        return answer;
    }

    public static void main(String[] args){
        Main T = new Main();
        Scanner sc = new Scanner(System.in);

        String str = sc.nextLine();
        //단어 하나가 아니라 문장을 받아야 하기 때문에 nextLine을 활용
        System.out.println(T.solution(str));
    }

}
import java.io.*;
import java.util.StringTokenizer;

public class p11 {

    public int solution(String str, char t){
        int answer=0;


        return answer;
    }

    public static void main(String[] args) throws IOException {
        Main T = new Main();
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st;

        String str = br.readLine();
        String[] strArr = str.toUpperCase().split("");
        //문자열을 입력받고 모두 대문자로 변형 후
        //strArr배열에 한 문자씩 대입

        //String[] strArr = br.readLine().split("");
        //이렇게 바로 입력받아도 될 듯

        String chr = br.readLine();
        int count=0;
        for(int i=0; i< strArr.length; i++){
            if(chr.toUpperCase().equals(strArr[i])){
                count++;
            }
        }
//        System.out.println(count);
        bw.write(count);
        bw.flush();
        bw.close();
    }
}

import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int chieuDai = sc.nextInt();
        int chieuRong = sc.nextInt();
        sc.close();

        if (chieuDai <= 0 || chieuRong <= 0){
            System.out.println(0);
            return;
        }

        hinhChuNhat hcn = new hinhChuNhat(chieuDai, chieuRong);

        int chuVi = hcn.chuVi();
        int dienTich = hcn.dienTich();
        System.out.println(chuVi + " " + dienTich);
    }
}

class hinhChuNhat {
    private final int chieuDai;
    private final int chieuRong;

    public hinhChuNhat(int chieuDai, int chieuRong){
        this.chieuDai = chieuDai;
        this.chieuRong = chieuRong;
    }

    public int chuVi(){
        return (chieuDai + chieuRong) * 2;
    }

    public int dienTich(){
        return chieuDai * chieuRong;
    }
}



























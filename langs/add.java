import java.util.Scanner;

public class add {
    public static int sumOfDigits(int n) {
        int total = 0;
        while (n > 0) {
            total += n % 10;
            n /= 10;
        }
        return total;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = scanner.nextInt();
        System.out.println("Sum of digits: " + sumOfDigits(num));
        scanner.close();
    }
}

#include <iostream>
using namespace std;

int sum_of_digits(int n) {
    int total = 0;
    while (n > 0) {
        total += n % 10;
        n /= 10;
    }
    return total;
}

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;
    cout << "Sum of digits: " << sum_of_digits(num) << endl;
    return 0;
}

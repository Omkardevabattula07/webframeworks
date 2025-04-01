#include <iostream>

using namespace std;

int main1(){
    cout << "Hello i am checking once again!!!";
    return 0 ;
}
void newFunction(){
    cout << "This is a new function";
    // return 0;
}
int main(){
   newFunction();
   int  num = 12;
   cout << num <<"\n";
   int x;
   cout << "Enter you number:";
   cin >> x;
   cout << "your number is :"<<x <<"\n";
   if (x>10){
    cout << "You entered number is greater than 10";

   }else{
    cout << "you entered number is lesser than 10";
   }

   return 0;

}

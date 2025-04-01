
def fun1():
    
    arr = [1,2,3,4,5]
    for i in range (len(arr)):
        for j in range(3):
            print(f"Element {arr[i]}")
def fun2():
    a = 1
    for i in range (a): 
        for j in range (5):
            a =a+1
            print(a)
    
def main():
    fun1()
    fun2()
    
if __name__ == "__main__":
    main()


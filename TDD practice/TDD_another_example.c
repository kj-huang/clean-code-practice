#include <stdio.h>
#include <assert.h>
#include <stdbool.h>


int add(int a, int b) {
	return a+b;
}

int mult(int a, int b) {
	return a*b;
}

void Number_Equal_To_Seven_Throw_OutOfException_TestMethod(){
	int op = add(3,4);
	assert(op == 7);
}

void Number_Equal_To_Twelve_Throw_OutOfException_TestMethod(){
	int op = mult(3,4);
	assert(op == 12);
}

int main() {
	Number_Equal_To_Seven_Throw_OutOfException_TestMethod();
	Number_Equal_To_Twelve_Throw_OutOfException_TestMethod();
	return 0;
}

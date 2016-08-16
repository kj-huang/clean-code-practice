#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

//This scope's code should write at number.h
typedef struct _number{
   	int a;
	int b;
}Number;

typedef Number* NumberObject;
//This scope's code should write at number.h

//This scope's code should write at number.c
NumberObject newObject(int a, int b){
	NumberObject this = malloc(sizeof(Number));
	this -> a = a;
	this -> b = b;
	return this;
}

void delectObject(NumberObject this){
	free(this);
}

int add(NumberObject this){
	return this -> a + this -> b;
}

int get_a(NumberObject this){
	return this -> a;
}


int get_b(NumberObject this){
	return this -> b;
}
//This scope's code should write at number.c

//This scope's code should write at c_unit_test.c
void number_is_not_equal_to_seven_throwException(NumberObject this){
	int test_Case = add(this);
	assert(test_Case == 7);
}
//This scope's code should write at c_unit_test.c


int main(){
	
	NumberObject test = newObject(3,4);
	
	number_is_not_equal_to_seven_throwException(test);

	printf("add = %d\n", add(test));
	return 0;
}
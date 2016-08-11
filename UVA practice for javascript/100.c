#include<stdio.h>
// 3N + 1 problem

void swapNumber(int *,int *);
int threeNplusOneAlgorithm(int);

int main(){

	int firstInput,secondInput,
		operateTime,maxOperateTime = 0,counter;

	while(scanf("%d %d", &firstInput, &secondInput)!=EOF)
	{
		printf("%d %d", firstInput, secondInput);
		if(firstInput > secondInput)
		{
			swapNumber(&firstInput,&secondInput);
		}

		for(counter = firstInput; counter <= secondInput; counter ++)
		{
			operateTime = threeNplusOneAlgorithm(counter);
			
			if(operateTime > maxOperateTime)
				maxOperateTime = operateTime;
		}
		printf(" %d\n", maxOperateTime + 1);
	
		maxOperateTime = 0;
	}
	return 0;
}

int threeNplusOneAlgorithm(int start)
{
	int operateTime = 0;

	while( start != 1 )
	{
		if( start % 2 == 0 )
			start /= 2;
		else
			start = 3 * start + 1;
		
		operateTime++;
	}
	return operateTime;
}

void swapNumber(int *firstInput,int *secondInput)
{
	int temp = *firstInput;
	secondInput = firstInput;
	*secondInput = temp;
}
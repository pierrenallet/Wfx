/// <reference path="index.ts"/>

class Calculator {
	value: number = 0;
	increase()
	{
		this.value +=1;
	}
	decrease()
	{
		this.value -= 1;
	}
	increaseBy(amount: number){
		this.value += amount;
	}
	
}
new Wfx.Application().run(new Calculator(), Sample.calcTemplate)
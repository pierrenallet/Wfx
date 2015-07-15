/// <reference path="index.ts"/>

class Calculator {
	firstNumber: string = "0"
	secondNumber: string = "0";
	result() {
		return parseInt(this.firstNumber, 10) + parseInt(this.secondNumber, 10);
	}
}
new Wfx.Application().run(new Calculator(), Sample.calcTemplate)
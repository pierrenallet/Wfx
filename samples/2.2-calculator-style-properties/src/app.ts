/// <reference path="index.ts"/>

class Calculator {
	constructor() {

	}
	height: string = "100";
	width: string = "100";
	surface() {
		return parseInt(this.height, 10) * parseInt(this.width, 10);
	}
}
new Wfx.Application().run(new Calculator(), Sample.calcTemplate)
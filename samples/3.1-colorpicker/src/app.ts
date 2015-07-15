/// <reference path="index.ts"/>

class ColorPicker {
	red: string = "00";
	green: string = "00";
	blue: string = "00";
	color() {
		return "#" + this.colorComponent(this.red) + this.colorComponent(this.green) + this.colorComponent(this.blue);
	}
	colorComponent(s: string) {
		if (s.length == 0)
			return "00";
		if (s.length == 1)
			return "0" + s;
		return s;
	}
}
new Wfx.Application().run(new ColorPicker(), Sample.colorPickerTemplate)
/// <reference path='index.ts'/>
module Sample {
	export function helloTemplate(data: any): Wfx.Component {
		return Wfx.element('div', { data: data} ,
Wfx.element('div', { data: data} ,
"hello world" ) );
	}
}
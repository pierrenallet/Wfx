/// <reference path='index.ts'/>
module Sample {
	export function helloTemplate(data: any): Wfx.Component {
		return Wfx.element('div', { 'text':"hello world", data: data}  );
	}
}
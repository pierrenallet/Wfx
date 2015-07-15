/// <reference path='index.ts'/>
module Sample {
	export function helloTemplate(data: any): Wfx.Component {
		return Wfx.element('div', { 'text':(messageFn()), data: data}  );
	}
}
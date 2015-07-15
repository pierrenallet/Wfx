/// <reference path='index.ts'/>
module Sample {
	export function helloTemplate(data: any): Wfx.Component {
		return Wfx.element('div', { 'text':Wfx.bind((_: any) => _.message), data: data}  );
	}
}
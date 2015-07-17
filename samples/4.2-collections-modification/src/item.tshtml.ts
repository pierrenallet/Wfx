/// <reference path='index.ts'/>
module Sample {
	export function itemTemplate(data: any): Wfx.Component {
		return Wfx.element('div', { 'text':Wfx.bind((_: any) => _), data: data}  );
	}
}
/// <reference path='index.ts'/>
module App2 {
	export function helloTemplate(data: any): Wfx.Component {
		return Wfx.element('div', { data: data} ,
Wfx.element('div', { 'text':Wfx.bind((_: any) => _.message), data: data}  ),
Wfx.element('span', { data: data} ,
"Enter message your message:" ),
Wfx.element('input', { 'value':Wfx.bind((_: any) => _.message, {setValue : (_, v) => _.message=v}), data: data}  ) );
	}
}
/// <reference path='index.ts'/>
module Sample {
	export function timeTemplate(data: any): Wfx.Component {
		return Wfx.element('div', { data: data} ,
"The current time is",
Wfx.element('div', { 'text':(new Date()), data: data}  ) );
	}
}
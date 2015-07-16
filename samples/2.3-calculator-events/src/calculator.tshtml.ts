/// <reference path='index.ts'/>
module Sample {
	export function calcTemplate(data: any): Wfx.Component {
		return Wfx.element('div', { data: data} ,
Wfx.element('button', { 'class':"btn"
, 'click': (_:any) => _.decrease(), data: data} ,
"-" ),
Wfx.element('span', { 'text':Wfx.bind((_: any) => _.value), data: data}  ),
Wfx.element('button', { 'class':"btn"
, 'click': (_:any) => _.increase(), data: data} ,
"+" ) );
	}
}
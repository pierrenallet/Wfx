/// <reference path='index.ts'/>
module Sample {
	export function calcTemplate(data: any): Wfx.Component {
		return Wfx.element('div', { data: data} ,
Wfx.element('div', { data: data} ,
Wfx.element('span', { data: data} ,
"Width:" ),
Wfx.element('input', { 'type':"text"
, 'value':Wfx.bind((_: any) => _.width, {setValue : (_, v) => _.width=v}), data: data}  ) ),
Wfx.element('div', { data: data} ,
Wfx.element('span', { data: data} ,
"Height:" ),
Wfx.element('input', { 'type':"text"
, 'value':Wfx.bind((_: any) => _.height, {setValue : (_, v) => _.height=v}), data: data}  ) ),
Wfx.element('div', { data: data} ,
Wfx.element('div', { 'style':"background:red"
, 'text':Wfx.bind((_: any) => _.surface())
, 'height':Wfx.bind((_: any) => _.height+'px')
, 'width':Wfx.bind((_: any) => _.width+ 'px'), data: data}  ) ) );
	}
}
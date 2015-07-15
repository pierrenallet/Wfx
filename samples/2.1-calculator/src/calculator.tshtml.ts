/// <reference path='index.ts'/>
module Sample {
	export function calcTemplate(data: any): Wfx.Component {
		return Wfx.element('div', { data: data} ,
Wfx.element('div', { data: data} ,
Wfx.element('input', { 'type':"text"
, 'value':Wfx.bind((_: any) => _.firstNumber, {setValue : (_, v) => _.firstNumber=v}), data: data}  ) ),
Wfx.element('div', { data: data} ,
Wfx.element('input', { 'type':"text"
, 'value':Wfx.bind((_: any) => _.secondNumber, {setValue : (_, v) => _.secondNumber=v}), data: data}  ) ),
Wfx.element('div', { data: data} ,
Wfx.element('span', { 'text':Wfx.bind((_: any) => _.result()), data: data}  ) ) );
	}
}
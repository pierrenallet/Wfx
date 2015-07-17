/// <reference path='index.ts'/>
module Sample {
	export function shoppingCartTemplate(data: any): Wfx.Component {
		return Wfx.element('div', { data: data} ,
Wfx.element('div', { 'foreach':Wfx.bind((_: any) => _.items)
, 'template':(itemTemplate), data: data}  ),
Wfx.element('div', { data: data} ,
Wfx.element('input', { 'value':Wfx.bind((_: any) => _.newItem, {setValue : (_, v) => _.newItem=v}), data: data}  ),
Wfx.element('button', { 'click': (_:any) => _.addItem(), data: data} ,
"Add item" ) ),
Wfx.element('div', { data: data} ,
Wfx.element('button', { 'click': (_:any) => _.removeLast(), data: data} ,
"Remove last" ) ) );
	}
}
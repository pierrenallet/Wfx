/// <reference path='index.ts'/>
module Sample {
	export function colorPickerTemplate(data: any): Wfx.Component {
		return Wfx.element('div', { data: data} ,
Wfx.element('div', { data: data} ,
Wfx.element('span', { data: data} ,
"Red:" ),
Wfx.element('input', { 'type':"range"
, 'value':Wfx.bind((_: any) => _.red, {setValue : (_, v) => _.red=v}), data: data}  ) ),
Wfx.element('div', { data: data} ,
Wfx.element('span', { data: data} ,
"Green:" ),
Wfx.element('input', { 'type':"range"
, 'value':Wfx.bind((_: any) => _.green, {setValue : (_, v) => _.green=v}), data: data}  ) ),
Wfx.element('div', { data: data} ,
Wfx.element('span', { data: data} ,
"Blue:" ),
Wfx.element('input', { 'type':"range"
, 'value':Wfx.bind((_: any) => _.blue, {setValue : (_, v) => _.blue=v}), data: data}  ) ),
Wfx.element('div', { 'style':"height:100px; width:100px"
, 'background':Wfx.bind((_: any) => _.color()), data: data}  ) );
	}
}
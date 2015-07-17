/// <reference path='index.ts'/>
module Sample {
	export function shoppingCartTemplate(data: any): Wfx.Component {
		return Wfx.element('div', { 'foreach':Wfx.bind((_: any) => _.items)
, 'template':(itemTemplate), data: data}  );
	}
}
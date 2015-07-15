/// <reference path='index.ts'/>
(() =>{
 Wfx.customElements["statusButton"] = 
	 (data: any): Wfx.Component =>{
		var r =  Wfx.element('li', { } ,
	Wfx.element('a', { 'click': (__:any,_:any) => { ((__: any, _: any) => _.select())(_.getTemplatedParent().data, _.getTemplatedParent())}
, 'href':"#/"
, 'class':Wfx.bind((_: any) => _.data.status === _.status ? 'selected' : '', {getSource:(c:Wfx.Component) => c.getTemplatedParent().bindingData()})
, 'text':Wfx.bind((_: any) => _.text, {getSource:(c:Wfx.Component) => c.getTemplatedParent().bindingData()})}  ) );  return r;};
 Wfx.customElementTypes["statusButton"] = (child) => new Todo.StatusButton(child);
	})();
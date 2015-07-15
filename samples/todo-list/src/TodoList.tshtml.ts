/// <reference path='index.ts'/>
module Todo {
	export function todoListTemplate(data: any): Wfx.Component {
		return Wfx.element('section', { 'id':"todoapp", data: data} ,
Wfx.element('header', { 'id':"header", data: data} ,
Wfx.element('h1', { data: data} ,
"todos" ),
Wfx.element('form', { 'id':"todo-form"
, 'submit': (_:any) => _.addTodo(), data: data} ,
Wfx.element('input', { 'id':"new-todo"
, 'value':Wfx.bind((_: any) => _.newTodoText, {setValue : (_, v) => _.newTodoText=v})
, 'placeholder':"What needs to be done?"
, 'enabled':"true"
, 'autofocus':"true", data: data}  ) ) ),
Wfx.element('section', { 'id':"main"
, 'visible':Wfx.bind((_: any) => _.todos.length), data: data} ,
Wfx.element('input', { 'id':"toggle-all"
, 'type':"checkbox"
, 'click': (_:any) => _.markAll(), data: data}  ),
Wfx.element('label', { 'for':"toggle-all"
, 'text':"Mark all as complete", data: data}  ),
Wfx.element('ul', { 'id':"todo-list"
, 'foreach':Wfx.bind((_: any) => _.visibleTodos())
, 'template':(todoItemTemplate), data: data}  ) ),
Wfx.element('footer', { 'id':"footer"
, 'visible':Wfx.bind((_: any) => _.todos.length), data: data} ,
Wfx.element('span', { 'id':"todo-count", data: data} ,
Wfx.element('strong', { 'text':Wfx.bind((_: any) => _.remainingTodos().length), data: data}  ),
Wfx.element('span', { 'if':Wfx.bind((_: any) => _.remainingTodos().length > 1), data: data} ,
Wfx.element('span', { 'text':" items left", data: data}  ) ),
Wfx.element('span', { 'ifnot':Wfx.bind((_: any) => _.remainingTodos().length > 1), data: data} ,
Wfx.element('span', { 'text':" item left", data: data}  ) ) ),
Wfx.element('ul', { 'id':"filters", data: data} ,
Wfx.element('statusButton', { 'status':(TodoListStatus.all)
, 'text':"All", data: data}  ),
Wfx.element('statusButton', { 'status':(TodoListStatus.active)
, 'text':"Active", data: data}  ),
Wfx.element('statusButton', { 'status':(TodoListStatus.completed)
, 'text':"Completed", data: data}  ) ),
Wfx.element('button', { 'id':"clear-completed"
, 'click': (_:any) => _.clearCompletedTodos()
, 'visible':Wfx.bind((_: any) => _.completedTodos().length)
, 'text':"Clear completed", data: data}  ) ) );
	}
}
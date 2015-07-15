/// <reference path='index.ts'/>
module Todo {
	export function todoItemTemplate(data: Todo.TodoItem): Wfx.Component {
		return Wfx.element('li', { 'class':Wfx.bind((_: Todo.TodoItem) => _.cssClass()), data: data} ,
Wfx.element('div', { 'class':"view", data: data} ,
Wfx.element('input', { 'class':"toggle"
, 'type':"checkbox"
, 'checked':Wfx.bind((_: Todo.TodoItem) => _.isCompleted)
, 'click': (_:Todo.TodoItem) => _.toggleCompleted(), data: data}  ),
Wfx.element('label', { 'dblclick': (_:Todo.TodoItem) => _.edit()
, 'text':Wfx.bind((_: Todo.TodoItem) => _.text), data: data}  ),
Wfx.element('button', { 'class':"destroy"
, 'click': (_:Todo.TodoItem) => _.destroy(), data: data}  ) ),
Wfx.element('form', { 'submit': (_:Todo.TodoItem) => _.saveEdits()
, 'visible':Wfx.bind((_: Todo.TodoItem) => _.isEditing), data: data} ,
Wfx.element('input', { 'class':""
, 'value':Wfx.bind((_: Todo.TodoItem) => _.text, {setValue : (_, v) => _.text=v})
, 'blur': (_:Todo.TodoItem) => _.saveEdits(), data: data}  ) ) );
	}
}
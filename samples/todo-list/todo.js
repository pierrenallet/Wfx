var Todo;
(function (Todo) {
    var TodoItem = (function () {
        function TodoItem(parent, text) {
            if (text === void 0) { text = ""; }
            this.parent = parent;
            this.text = text;
            this.isCompleted = false;
            this.isEditing = false;
        }
        TodoItem.prototype.destroy = function () {
            var items = this.parent.todos;
            items.splice(items.indexOf(this), 1);
        };
        TodoItem.prototype.toggleCompleted = function () { this.isCompleted = !this.isCompleted; };
        TodoItem.prototype.edit = function () {
            this.isEditing = true;
            this.proposedText = this.text;
        };
        TodoItem.prototype.cssClass = function () {
            var result = "";
            if (this.isEditing)
                result += "editing ";
            if (this.isCompleted)
                result += "completed";
            return result;
        };
        TodoItem.prototype.saveEdits = function () {
            this.text = this.proposedText;
            this.isEditing = false;
        };
        return TodoItem;
    })();
    Todo.TodoItem = TodoItem;
})(Todo || (Todo = {}));
var Todo;
(function (Todo) {
    (function (TodoListStatus) {
        TodoListStatus[TodoListStatus["all"] = 0] = "all";
        TodoListStatus[TodoListStatus["active"] = 1] = "active";
        TodoListStatus[TodoListStatus["completed"] = 2] = "completed";
    })(Todo.TodoListStatus || (Todo.TodoListStatus = {}));
    var TodoListStatus = Todo.TodoListStatus;
})(Todo || (Todo = {}));
/// <reference path="todoliststatus.ts" />
/// <reference path="todoitem.ts" />
var Todo;
(function (Todo) {
    var TodoList = (function () {
        function TodoList() {
            this.todos = new Array();
            this.status = Todo.TodoListStatus.all;
            this.todos.push(new Todo.TodoItem(this, "one"));
            this.todos.push(new Todo.TodoItem(this, "two"));
            this.todos.push(new Todo.TodoItem(this, "three"));
        }
        TodoList.prototype.remainingTodos = function () {
            return this.todos.filter(function (todo) { return !todo.isCompleted; });
        };
        TodoList.prototype.completedTodos = function () {
            return this.todos.filter(function (todo) { return todo.isCompleted; });
        };
        TodoList.prototype.visibleTodos = function () {
            switch (this.status) {
                case Todo.TodoListStatus.all:
                    return this.todos;
                case Todo.TodoListStatus.completed:
                    return this.completedTodos();
                case Todo.TodoListStatus.active:
                    return this.remainingTodos();
                default:
                    throw "NotSupported " + this.status;
            }
        };
        TodoList.prototype.addTodo = function () {
            this.todos.push(new Todo.TodoItem(this, this.newTodoText));
            this.newTodoText = "";
        };
        TodoList.prototype.markAll = function () { this.todos.forEach(function (todo) { return todo.isCompleted = true; }); };
        TodoList.prototype.clearCompletedTodos = function () {
            var _this = this;
            this.completedTodos().forEach(function (todo) { return _this.todos.splice(_this.todos.indexOf(todo), 1); });
        };
        return TodoList;
    })();
    Todo.TodoList = TodoList;
})(Todo || (Todo = {}));
/// <reference path='index.ts'/>
(function () {
    Wfx.customElements["statusButton"] =
        function (data) {
            var r = Wfx.element('li', {}, Wfx.element('a', { 'click': function (__, _) { (function (__, _) { return _.select(); })(_.getTemplatedParent().data, _.getTemplatedParent()); },
                'href': "#/",
                'class': Wfx.bind(function (_) { return _.data.status === _.status ? 'selected' : ''; }, { getSource: function (c) { return c.getTemplatedParent().bindingData(); } }),
                'text': Wfx.bind(function (_) { return _.text; }, { getSource: function (c) { return c.getTemplatedParent().bindingData(); } }) }));
            return r;
        };
    Wfx.customElementTypes["statusButton"] = function (child) { return new Todo.StatusButton(child); };
})();
/// <reference path='index.ts'/>
var Todo;
(function (Todo) {
    function todoListTemplate(data) {
        return Wfx.element('section', { 'id': "todoapp", data: data }, Wfx.element('header', { 'id': "header", data: data }, Wfx.element('h1', { data: data }, "todos"), Wfx.element('form', { 'id': "todo-form",
            'submit': function (_) { return _.addTodo(); }, data: data }, Wfx.element('input', { 'id': "new-todo",
            'value': Wfx.bind(function (_) { return _.newTodoText; }, { setValue: function (_, v) { return _.newTodoText = v; } }),
            'placeholder': "What needs to be done?",
            'enabled': "true",
            'autofocus': "true", data: data }))), Wfx.element('section', { 'id': "main",
            'visible': Wfx.bind(function (_) { return _.todos.length; }), data: data }, Wfx.element('input', { 'id': "toggle-all",
            'type': "checkbox",
            'click': function (_) { return _.markAll(); }, data: data }), Wfx.element('label', { 'for': "toggle-all",
            'text': "Mark all as complete", data: data }), Wfx.element('ul', { 'id': "todo-list",
            'foreach': Wfx.bind(function (_) { return _.visibleTodos(); }),
            'template': (Todo.todoItemTemplate), data: data })), Wfx.element('footer', { 'id': "footer",
            'visible': Wfx.bind(function (_) { return _.todos.length; }), data: data }, Wfx.element('span', { 'id': "todo-count", data: data }, Wfx.element('strong', { 'text': Wfx.bind(function (_) { return _.remainingTodos().length; }), data: data }), Wfx.element('span', { 'if': Wfx.bind(function (_) { return _.remainingTodos().length > 1; }), data: data }, Wfx.element('span', { 'text': " items left", data: data })), Wfx.element('span', { 'ifnot': Wfx.bind(function (_) { return _.remainingTodos().length > 1; }), data: data }, Wfx.element('span', { 'text': " item left", data: data }))), Wfx.element('ul', { 'id': "filters", data: data }, Wfx.element('statusButton', { 'status': (Todo.TodoListStatus.all),
            'text': "All", data: data }), Wfx.element('statusButton', { 'status': (Todo.TodoListStatus.active),
            'text': "Active", data: data }), Wfx.element('statusButton', { 'status': (Todo.TodoListStatus.completed),
            'text': "Completed", data: data })), Wfx.element('button', { 'id': "clear-completed",
            'click': function (_) { return _.clearCompletedTodos(); },
            'visible': Wfx.bind(function (_) { return _.completedTodos().length; }),
            'text': "Clear completed", data: data })));
    }
    Todo.todoListTemplate = todoListTemplate;
})(Todo || (Todo = {}));
/// <reference path='index.ts'/>
var Todo;
(function (Todo) {
    function todoItemTemplate(data) {
        return Wfx.element('li', { 'class': Wfx.bind(function (_) { return _.cssClass(); }), data: data }, Wfx.element('div', { 'class': "view", data: data }, Wfx.element('input', { 'class': "toggle",
            'type': "checkbox",
            'checked': Wfx.bind(function (_) { return _.isCompleted; }),
            'click': function (_) { return _.toggleCompleted(); }, data: data }), Wfx.element('label', { 'dblclick': function (_) { return _.edit(); },
            'text': Wfx.bind(function (_) { return _.text; }), data: data }), Wfx.element('button', { 'class': "destroy",
            'click': function (_) { return _.destroy(); }, data: data })), Wfx.element('form', { 'submit': function (_) { return _.saveEdits(); },
            'visible': Wfx.bind(function (_) { return _.isEditing; }), data: data }, Wfx.element('input', { 'class': "",
            'value': Wfx.bind(function (_) { return _.text; }, { setValue: function (_, v) { return _.text = v; } }),
            'blur': function (_) { return _.saveEdits(); }, data: data })));
    }
    Todo.todoItemTemplate = todoItemTemplate;
})(Todo || (Todo = {}));
/// <reference path="../../../wfx/dist/wfx.d.ts"/>
/// <reference path="TodoItem.ts"/>
/// <reference path="TodoList.ts"/>
/// <reference path="StatusButton.tshtml.ts"/>
/// <reference path="TodoList.tshtml.ts"/>
/// <reference path="TodoItem.tshtml.ts"/>
/// <reference path="TodoList.tshtml.ts"/>
/// <reference path="index.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Todo;
(function (Todo) {
    var StatusButton = (function (_super) {
        __extends(StatusButton, _super);
        function StatusButton(attributes) {
            _super.call(this, attributes);
        }
        StatusButton.prototype.select = function () {
            this.data.status = this.getAttribute('status');
        };
        return StatusButton;
    })(Wfx.Component);
    Todo.StatusButton = StatusButton;
})(Todo || (Todo = {}));
/// <reference path="index.ts"/>
new Wfx.Application().run(new Todo.TodoList(), Todo.todoListTemplate);
//# sourceMappingURL=todo.js.map
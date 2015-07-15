/// <reference path="todoliststatus.ts" />
/// <reference path="todoitem.ts" />
module Todo {
    export class TodoList {
        constructor() {
            this.todos.push(new TodoItem(this, "one"));
            this.todos.push(new TodoItem(this, "two"));
            this.todos.push(new TodoItem(this, "three"));
        }

        newTodoText: string;
        todos = new Array<TodoItem>();

        remainingTodos() {
            return this.todos.filter(todo => !todo.isCompleted);
        }

        completedTodos() {
            return this.todos.filter(todo => todo.isCompleted);
        }

        visibleTodos() {
            switch (this.status) {
                case TodoListStatus.all:
                    return this.todos;
                case TodoListStatus.completed:
                    return this.completedTodos();
                case TodoListStatus.active:
                    return this.remainingTodos();
                default:
                    throw `NotSupported ${this.status}`;
            }
        }

        status = TodoListStatus.all;

        addTodo() {
            this.todos.push(new TodoItem(this, this.newTodoText));
            this.newTodoText = "";
        }

        markAll() { this.todos.forEach(todo => todo.isCompleted = true) }

        clearCompletedTodos() {
            this.completedTodos().forEach(todo => this.todos.splice(this.todos.indexOf(todo), 1));
        }
    }
}
/// <reference path="../../wfx/dist/wfx.d.ts" />
declare module Todo {
    class TodoItem {
        private parent;
        text: string;
        constructor(parent: TodoList, text?: string);
        isCompleted: boolean;
        isEditing: boolean;
        destroy(): void;
        toggleCompleted(): void;
        edit(): void;
        cssClass(): string;
        proposedText: string;
        saveEdits(): void;
    }
}
declare module Todo {
    enum TodoListStatus {
        all = 0,
        active = 1,
        completed = 2,
    }
}
declare module Todo {
    class TodoList {
        constructor();
        newTodoText: string;
        todos: TodoItem[];
        remainingTodos(): TodoItem[];
        completedTodos(): TodoItem[];
        visibleTodos(): TodoItem[];
        status: TodoListStatus;
        addTodo(): void;
        markAll(): void;
        clearCompletedTodos(): void;
    }
}
declare module Todo {
    function todoListTemplate(data: any): Wfx.Component;
}
declare module Todo {
    function todoItemTemplate(data: Todo.TodoItem): Wfx.Component;
}
declare module Todo {
    class StatusButton extends Wfx.Component {
        constructor(attributes: any);
        select(): void;
    }
}

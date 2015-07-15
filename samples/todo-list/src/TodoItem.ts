module Todo {
    export class TodoItem {
        constructor(private parent: TodoList, public text: string = "") {}

        isCompleted = false;

        isEditing = false;

        destroy() {
            var items = this.parent.todos;
            items.splice(items.indexOf(this), 1);
        }

        toggleCompleted() { this.isCompleted = !this.isCompleted; }

        edit(): void { this.isEditing = true;
            this.proposedText = this.text;
        }
        
        cssClass(): string
        {
            var result = "";
            if (this.isEditing)
                result += "editing ";
            if (this.isCompleted)
                result += "completed";
                return result;
        }

        proposedText: string;

        saveEdits() { this.text = this.proposedText;
            this.isEditing = false;
        }
    }
}
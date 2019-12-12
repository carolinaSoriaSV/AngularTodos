import { Component } from "@angular/core";
import { Todo } from "./models/todo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  todoArray: Todo[] = [];

  add() {
    this.todoArray.push(this.selectedTask);
    console.log(this.todoArray);
    this.selectedTask = new Todo();
  }

  selectedTask: Todo = new Todo();

  isFinished: boolean = false;
  isDeleted: boolean = false;

  finishItem(todo): void {
    this.isFinished = !this.isFinished;
  }

  deleteItem(todo) {
    console.log("delete");
    // this.isDeleted = true;
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo === this.todoArray[i]) {
        {
          this.todoArray.splice(i, 1);
          // this.isDeleted = true;
        }
      }
    }
    // return (this.isDeleted = true);
  }
}

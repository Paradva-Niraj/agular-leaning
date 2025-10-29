import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {
  task="";
  todos:{id:number,task:string}[] = [];
  additem(){
    this.todos.push({id:this.todos.length+1,task:this.task});
    this.task = ""
  }

  removeitem(id:number){
    this.todos = this.todos.filter((i)=>i.id != id);
    // console.log(id);
  }

}

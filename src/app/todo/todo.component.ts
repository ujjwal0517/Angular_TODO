import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todo!:string;
   todoList:Array<string> = []
  

  ngOnInit(): void {
    
  }
  addTodo(value: string){
    if(value!=null){
      this.todo = value
      this.todoList.push(this.todo);
     value = " "
    }
   
    
  }
  
  onDelete(i:any){
    this.todoList.splice(i, 1)
  }
  

}

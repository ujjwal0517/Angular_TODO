import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todo!:string;
  empty:string= ""
  message!: string
  message1:string = "Congratulations Todo Added Successfully"
  message2:string = "Please Insert Todo"
  messageClass:string = ""
  editValue:string = ""
  updateClass:string=""
  selected!:number 
  todoList:Array<string> = []
  

  ngOnInit(): void {
    
  }
  addTodo(value: string){
    if(value!=""){
      this.todo = value
      const result = this.todoList.push(this.todo);
      this.empty = " "
      if(result){
        this.message = this.message1;
        this.messageClass = "successClass"
        setTimeout(()=>{
          this.message = ""
        }, 3000)
        
      }
    

      
    }else{
      this.message = this.message2;
      this.messageClass = "DangerClass"
      setTimeout(()=>{
        this.message = ""
      }, 3000)
    }
    
  }
  
  onDelete(i:number){
    this.todoList.splice(i, 1)
    this.message = "Congratulations You have Completed Your Task"
    this.messageClass = "successClass"
    setTimeout(()=>[
      this.message=""
    ],3000)
  }
  onEdit(i:number,val:HTMLParagraphElement){
  //  const value = this.todoList.filter((todo)=>todo[i]).toString()
  //   this.editValue = value;
    // this.editValue = val;
    this.selected=i;
    this.editValue = val.innerHTML;
  //  console.log(val.innerHTML);
  }
  // onUpdate(updatevalue:string){
  //   // console.log(value)
  //   // this.todoList.splice(i, )
  // }
  editGarne(i:number,updateData:string){
    
    this.todoList.splice(i,1, updateData);
    this.editValue="";    
  }
  

}

import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Todo } from './todo/todo';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Counter,Todo,RouterLink,ReactiveFormsModule,DatePipe,UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('World');
  description = "i am a Full stack web devloper";
  link = "https://niraj-paradva.vercel.app/";
  color = "pink"; 
  eventtype = "";
  
  //form learning
  name = new FormControl("Niraj");
  password = new FormControl();

  //form group
  registerfrom = new FormGroup({
    gname: new FormControl(),
    gpass: new FormControl(),
    gmail: new FormControl()
  })

  //piping
  date = new Date();

  time(){
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  constructor(){
    this.time();
  }

  ngOnInit(){
    console.log("after constructor");
  }

  changeColor(val:String){
    this.eventtype = "click event"
    if(val=="add"){
      this.color="red";
      setTimeout(() => {
        this.color = "pink"
      }, 100);
    }
    else if(val == "minus"){
      this.color="green";
      setTimeout(() => {
        this.color = "pink"
      }, 100);
    }
    else{
      this.color="yellow";
      setTimeout(() => {
        this.color = "pink"
      }, 100);
    }
  }

  handlefouse(event:any){
    this.eventtype = "focus on input"
  }

  mouseleave(){
    this.eventtype = "mouse leave"
  }

  mouseenter(){
    this.eventtype = "mouse enter"
  }

  //form learning
  submit(){
    if(this.name.value != null && this.password.value != null)
    {
      alert(`${this.name.value} and pass is ${this.password.value}`);
    }
    else{
      alert("check id pass");
    }
  }

  //group submit function
  groupsubmit(){
    // alert(`${this.registerfrom.value}`)
console.log(this.registerfrom.value);

  }

}
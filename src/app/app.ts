import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Todo } from './todo/todo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Counter,Todo,RouterLink,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('World');
  name = "Niraj";
  description = "i am a Full stack web devloper";
  link = "https://niraj-paradva.vercel.app/";
  color = "pink";
  eventtype = "";

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
}
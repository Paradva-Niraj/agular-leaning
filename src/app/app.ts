import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('World');
  name = "Niraj";
  description = "i am a Full stack web devloper";
  link = "https://niraj-paradva.vercel.app/";
  color = "red";

  changeColor(val:String){
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

}
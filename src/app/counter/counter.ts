import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {

    count:number=0;

    handleCounter(val:string){
      if(val=='plus')
      {
        this.count = this.count+1;
      }
      else if(val=='minus'){
        this.count = this.count-1;
      }
      else{
        this.count = 0;
      }
    }
}

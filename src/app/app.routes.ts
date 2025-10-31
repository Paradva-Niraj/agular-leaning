import { Routes } from '@angular/router';
import { Todo } from './todo/todo';
import { Counter } from './counter/counter';
import { App } from './app';
import { Action } from 'rxjs/internal/scheduler/Action';


export const routes: Routes = [
    {path:"todo",component:Todo},
    {path:"counter",component:Counter,data:{action:'chnageColor'}},
];
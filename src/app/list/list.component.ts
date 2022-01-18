import { Component, Input, OnInit } from '@angular/core';
import { Describe, Task } from '../task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public taskList : Task[] = [];
  public describeList : Describe[] = [];

  addTask(){
    this.taskList.push( new Task() );
  }

  removeTask(index: number){
    if (index > -1){
      this.taskList.splice(index, 1);
    }
  }

  isDo = false;
  isHidden = false;

  switchIsHidden() {
    if (this.isHidden) {
      this.isHidden = false
    } else {
      this.isHidden = true
    }
  }

  toDo():void{
    if (this.isDo){
      this.isDo = false
    } else {
      this.isDo = true
      console.log("tache faites.")
    }
  }

  //pas terminer...
  compteRendu():void{
    if (this.isDo === true){
      console.log("right")
    }else{
      console.log("nothing")
    }
  }
}
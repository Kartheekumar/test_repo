import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hvr-scheduler',
  templateUrl: './hvr-scheduler.component.html',
  styleUrls: ['./hvr-scheduler.component.css']
})
export class HvrSchedulerComponent implements OnInit {
  scheduler_status:string;
  constructor() {
    this.scheduler_status=this.get_scheduler_status();
   }

  ngOnInit() {
  }
  get_scheduler_status():string{
    return 'running';
}
getColor() {  
  return this.scheduler_status.toUpperCase() == 'Running'.toUpperCase() ? 'green' : 'red';  
}  
}

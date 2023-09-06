
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
constructor(private _EventService:EventService){

}
newEvents:any=[];
posterPrifix:string="https://image.tmdb.org/t/p/w500/"

ngOnInit():void{
  this._EventService.getEvents().subscribe({
    next:(response)=>{
      this.newEvents=response.data
      console.log(response.data);
      
    },
   error:(err)=>{
    console.log(err)
   }
    
  })
}

}


import { Component } from '@angular/core';
import { EventInfoService } from '../event-info.service';
@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent {
  constructor(private _EventInfoService:EventInfoService){}
  newEventInfo:any=[];
  posterPrifix:string="https://image.tmdb.org/t/p/w500/"
  


  ngOnInit():void{
    this._EventInfoService.getEventInfo().subscribe({
      next:(response)=>{
        this.newEventInfo=response.data
        console.log(response.data);
        
      },
     error:(err)=>{
      console.log(err)
     }
      
    })
}
}

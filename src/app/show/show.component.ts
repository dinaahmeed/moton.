import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BookDetailsSService } from '../book-details-s.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  constructor(private _BookDetailsSService:BookDetailsSService){}
  showBook:any=[];
  posterPrifix:string="https://image.tmdb.org/t/p/w500/"
  ngOnInit():void{
    // this.getBook(id:String)
    
  }

  getBook(id:string){
    this._BookDetailsSService.getBookDetails(id).subscribe({
      next:(response)=>{
        this.showBook=response.data
        console.log(response.data);
        
      },
     error:(err)=>{
      console.log(err)
     }
      
    })
  }


  toggleStar(book: any) {
    // Implement logic to toggle the star icon for the given book
    book.isStarred = !book.isStarred;
  }

  toggleHeart(book: any) {
    // Implement logic to toggle the heart icon for the given book
    book.isHearted = !book.isHearted;
  }

}

import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { GetCategoryService } from '../get-category.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryComponent } from '../category/category.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {


customOptions: OwlOptions = {
  loop: true,
  margin:10,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}

categoryList:any[]=[];
  posterPrifix:string="https://image.tmdb.org/t/p/w500"
 constructor(private _GetCategoryService:GetCategoryService , private _ActivatedRoute:ActivatedRoute , private route:Router)
 {
  
    
 } 
//  _GetCategoryService.getCategory().subscribe((data)=>
//  this.categoryList=data.results
//  )
categoryName: any;

ngOnInit():void{
  this._GetCategoryService.getCategory().subscribe({
    next:(response)=>{
      this.categoryList=response.data
      console.log(response.data);
      
    },
   error:(err)=>{
    console.log(err)
   }
    
  })

  // this._ActivatedRoute.params.subscribe()


  // this._ActivatedRoute.params.subscribe(params => {
  //   this.categoryName = params['categoryName'];
  // });
}

navigateToCategory(categoryName: string) {
  // Navigate to the category page with the dynamic category name
  this.route.navigate(['/category/arabic/', categoryName]);
}


}














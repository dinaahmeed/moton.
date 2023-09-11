import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {
constructor(private _CartService:CartService){}

cartClosed = false;
ngOnInit():void{
  this.getCartdata();
  this.cartClosed = this._CartService.isCartClosed();
}


toggleCart() {
  this.cartClosed = !this.cartClosed;
  this._CartService.setCartClosed(this.cartClosed);
}

  addTocart(bookId:string ){
    const userToken = localStorage.getItem('userToken')
    if(userToken){
      this._CartService.add_ToCart(bookId,userToken).subscribe({
        next : (res)=>{
          console.log(res)
         
        },
  
        error : (err)=>{
          console.log(err)
        }
      })
    }
  
  }

  Cartdata:any[]=[];
  totalPrice:any;
  images:any;
  getCartdata( ){
    const userToken = localStorage.getItem('userToken')
    if(userToken){
      this._CartService.getCartdata(userToken).subscribe({
        next : (res)=>{
        
          this.Cartdata = res.data.cartItems
          this.totalPrice = res.data.totalCartPrice
          this.images = res.data.image
          
          console.log(res.data.cartItems)
          // console.log(res.data.cartItems[0])
          console.log(res.data.totalCartPrice)
          console.log(res.data)
        
         
        },
  
        error : (err)=>{
          console.log(err)
        }
      })
    }
  
  }

  // removeItem(book:string){
  //   this._CartService.removeCartitems(book).subscribe({
  //     next : (res)=>{
         
      
  //       console.log(res.datas)
        
      
       
  //     },

  //     error : (err)=>{
  //       console.log(err)
  //     }
  //   })
  // }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { ShowComponent } from './show/show.component';
import { EventsComponent } from './events/events.component';
import { EventInfoComponent } from './event-info/event-info.component';
import { CategoryComponent } from './category/category.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'books',component:BooksComponent},
  {path:'contact',component:ContactComponent},
  {path:'payment',component:PaymentComponent},
  {path:'login',component:LoginComponent},
  {path:'news',component:NewsComponent},
  {path:'show',component:ShowComponent},
  {path:'events',component:EventsComponent},
  {path:'event-info',component:EventInfoComponent},
  {path:'category',component:CategoryComponent},
  {path:'signup',component:SignupComponent},

  {path:'category/arabic/:categoryName',component:CategoryComponent},
  {path:'category/english/:categoryName',component:CategoryComponent},
  {path:'category/arabic/show/:categoryId',component:ShowComponent},
  {path:'category/english/show/:categoryId',component:ShowComponent}
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

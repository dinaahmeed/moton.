import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import{BrowserAnimationsModule} from'@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './payment/payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { ShowComponent } from './show/show.component';
import { EventsComponent } from './events/events.component';
import { EventInfoComponent } from './event-info/event-info.component';
import { CategoryComponent } from './category/category.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    BooksComponent,
    NavbarComponent,
    FooterComponent,
    PaymentComponent,
    
    LoginComponent,
         NewsComponent,
         ShowComponent,
         EventsComponent,
         EventInfoComponent,
         CategoryComponent,
         SignupComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

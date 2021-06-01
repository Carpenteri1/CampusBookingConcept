import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { InfoComponent } from './info.component';
import { IconList } from './services/search/iconsList.service';
import { TestData } from './services/testdata.service';
import SearchView from './view/search/search.component';
import router from '../router';
import BookingView from './view/bookings/booking.component';
import { Rooms } from './services/models/Rooms';


@NgModule({
  declarations: [
        AppComponent,
        InfoComponent,
        SearchView,
        BookingView
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      router,      
  ],
    providers: [
        TestData,
        IconList,
        Rooms
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { Bookings, FetchData } from './services/models/Bookings';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [
        AppComponent,
        InfoComponent,
        SearchView,
        BookingView,
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      router,
      FormsModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatOptionModule
      
  ],
    providers: [
        TestData,
        IconList,
        Rooms,
        Bookings,
        FetchData
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

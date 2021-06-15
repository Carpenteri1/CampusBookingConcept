import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InfoComponent } from './info.component';
import { IconList } from './services/data/iconsList.service';
import { TestData } from './services/testdata.service';
import SearchView from './view/search/search.component';
import router from '../router';
import BookingView from './view/bookings/booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CommentsView } from './view/comments/comments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { apiConnection } from './services/data/apiConnection.service';

@NgModule({
  declarations: [
        AppComponent,
        InfoComponent,
        SearchView,
        BookingView,
        CommentsView,
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      router,
      FormsModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatOptionModule,
      BrowserAnimationsModule,
      Ng2SearchPipeModule
  ],
    providers: [
        TestData,
        IconList,
        apiConnection
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

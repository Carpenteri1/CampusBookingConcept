import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { InfoComponent } from './info.component';
import { IconList } from './services/search/iconsList.service';
import { TestData } from './services/testdata.service';
import SearchView from './view/search/search.component';
import router from '../router';


@NgModule({
  declarations: [
        AppComponent,
        InfoComponent,
        SearchView  
        
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      router
      
  ],
  providers: [TestData,IconList],
  bootstrap: [AppComponent,]
})
export class AppModule { }

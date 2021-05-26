import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SearchComponent } from '../search/search.component';


import { AppComponent } from './app.component';
import { InfoComponent } from './info.component';

@NgModule({
  declarations: [
        AppComponent,InfoComponent,SearchComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

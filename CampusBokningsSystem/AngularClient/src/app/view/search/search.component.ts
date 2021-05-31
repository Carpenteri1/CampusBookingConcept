import {Component, OnInit } from '@angular/core';
import { IconList } from '../../services/search/iconsList.service';
import { TestData } from '../../services/testdata.service';


@Component({
    selector: 'search-component',
    templateUrl: 'search.component.html',
    styleUrls: []
})
export default class SearchView implements OnInit {
    icons: IconList = new IconList();
    constructor(public data: TestData,private assets:IconList) {
        this.icons.assets = assets.assets;
    }
  
 
    testdataLenght = 0;
    time =
        {
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            sec: new Date().getSeconds()
        }

    currentDate = new Date().toLocaleDateString();
    currentTime = new Date().toLocaleTimeString();
    showMoreInfo: boolean = false;
    showAdvancedSearch: boolean = false;

    toggleAvancedSearch(): void {
        this.showAdvancedSearch = !this.showAdvancedSearch;
    }
    toggleShowMoreInfo(): void {
        this.showMoreInfo = !this.showMoreInfo;
    }

     ngOnInit(): void {
        this.updateTime();
         this.data
             .fetchData()
             .subscribe();
     }
    updateTime()
    {
        setInterval(() => { 
            this.time.sec = new Date().getSeconds();
            this.time.minutes = new Date().getMinutes();
            this.time.hours = new Date().getHours();
        }, 1000);
    }

}
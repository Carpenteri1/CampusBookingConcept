import { Component, OnInit } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common'
import { Observable } from 'rxjs';

import { IconList } from '../../services/data/iconsList.service';
import { TestData } from '../../services/testdata.service';
import { FetchData } from '../../services/data/fetchData';
import { IRooms } from '../../services/models/IRooms';
import { IBooking } from '../../services/models/IBookings';

@Component({
    selector: 'search-component',
    templateUrl: 'search.component.html',
    styleUrls: []
})
export default class SearchView implements OnInit {
    public bookingObject: IBooking[] = [];
    public roomObjects: IRooms[] = [];
    dataObject: any[] = [];
    constructor(public icons:IconList,private apiData:FetchData) {
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

    updateTime()
    {
        setInterval(() => { 
            this.time.sec = new Date().getSeconds();
            this.time.minutes = new Date().getMinutes();
            this.time.hours = new Date().getHours();
        }, 1000);
    }
    
  

    ngOnInit(): void {
        this.updateTime(); 
        this.apiData.getBookingData().subscribe(data => {
            this.bookingObject = data; // setup logic here
            this.testdataLenght = data.length;
        })
    }    
}
import { Component, OnInit } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common'
import { Observable } from 'rxjs';
import { Bookings, FetchData, IBooking } from '../../services/models/Bookings';
import { IRooms, Rooms } from '../../services/models/Rooms';
import { IconList } from '../../services/search/iconsList.service';
import { TestData } from '../../services/testdata.service';

@Component({
    selector: 'search-component',
    templateUrl: 'search.component.html',
    styleUrls: []
})
export default class SearchView implements OnInit {
    icons: IconList = new IconList();
    public bookingObject: IBooking[] = [];
    public roomObjects: IRooms[] = [];
    dataObject: any[] = [];
    constructor(public roomData: Rooms,assets:IconList,public apiData:FetchData) {
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
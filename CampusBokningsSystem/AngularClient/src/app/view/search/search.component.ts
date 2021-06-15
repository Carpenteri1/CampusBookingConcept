import { Component, OnInit } from '@angular/core';
import { IconList } from '../../services/data/iconsList.service';
import { IBooking } from '../../services/models/IBookings';
import { trigger, transition, state, animate, style, stagger, query } from '@angular/animations';
import { RoomType } from '../../services/enums/RoomType';
import { apiConnection } from '../../services/data/apiConnection.service';

@Component({
    selector: 'search-component',
    templateUrl: 'search.component.html',
    styleUrls: [],
    animations: [
        trigger('openClose', [
                state('open', style({
                height: '200px',
                opacity: 1,
            })),
                state('closed', style({
                height: '0px',
                opacity: 0,
            })),
                transition('open => closed', [
                animate('0.3s')
            ]),
                transition('closed => open', [
                animate('0.3s')
            ])
           
        ]),
        trigger("showHidePassed",[
                state('showPassed', style({
                height: '300px',
                opacity: 1,
            })),
                state('dontShowPassed', style({
                height: '0px',
                opacity: 0,
            })),
                transition('showPassed => dontShowPassed', [
                animate('0.8s')
            ]),
                transition('dontShowPassed => showPassed', [
                animate('0.8s')
            ]),
            
        ]),
    ]
})
export default class SearchView implements OnInit {


    constructor(public icons: IconList, private apiData: apiConnection) {
    }
    public roomType = RoomType;
    searchText:any;
    public bookingObject: IBooking[] = [];
    public todaysBookings: any[] = [];

    currentDateTime = new Date();
    timestamp = new Date();
    isOpen = false;
    disabled = false;
    showPassed = false;

    toggle() {
        this.isOpen = !this.isOpen;
    }

    updateTime()
    {
        setInterval(() => {
            this.currentDateTime = new Date();
        }, 1000);
    }
    async ngOnInit() : Promise<void> { 
        this.updateTime();

        this.bookingObject = [];
        this.todaysBookings = [];
        (await this.apiData.getBookingData()).subscribe(async data => {
            this.bookingObject = await data;
            for (let i = 0; i < this.bookingObject.length; i++) {
                let currentTime = new Date(this.currentDateTime);
                let tempDateEnd = new Date(this.bookingObject[i].timeEnd);
                if (tempDateEnd.getHours() > currentTime.getHours() && 
                    tempDateEnd.toDateString() === currentTime.toDateString()) {
                    this.todaysBookings.push(this.bookingObject[i]);
                }
            }
        });
    
    }    
}
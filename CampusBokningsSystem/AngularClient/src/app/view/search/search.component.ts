import { Component, OnInit } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common'
import { Observable } from 'rxjs';

import { IconList } from '../../services/data/iconsList.service';
import { TestData } from '../../services/testdata.service';
import { FetchData } from '../../services/data/fetchData';
import { IRooms } from '../../services/models/IRooms';
import { IBooking } from '../../services/models/IBookings';
import { Data } from '@angular/router';
import { trigger, transition, state, animate, style, stagger, query } from '@angular/animations';

@Component({
    selector: 'search-component',
    templateUrl: 'search.component.html',
    styleUrls: [],
    animations: [
        trigger('openClose', [
        // ...
        state('open', style({
            height: '200px',
            opacity: 1,
        })),
        state('closed', style({
            height: '0px',
            opacity: 0,
        })),
        transition('open => closed', [
            animate('1s')
        ]),
        transition('closed => open', [
            animate('0.5s')
        ]),
        transition('* => closed', [
            animate('1s')
        ]),
        transition('* => open', [
            animate('0.5s')
        ]),
        transition('open <=> closed', [
            animate('0.5s')
        ]),
        transition('* => open', [
            animate('1s',
                style({ opacity: '*' }),
            ),
        ]),
        transition('* => *', [
            animate('1s')
        ]),
        ]),
        trigger('filterAnimation', [
            transition(':enter, * => 0, * => -1', []),
            transition(':increment', [
                query(':enter', [
                    style({ opacity: 0, width: '0px' }),
                    stagger(50, [
                        animate('300ms ease-out', style({ opacity: 1, width: '*' })),
                    ]),
                ], { optional: true })
            ]),
            transition(':decrement', [
                query(':leave', [
                    stagger(50, [
                        animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
                    ]),
                ])
            ]),
        ]),
    ]
})
export default class SearchView implements OnInit {


    constructor(public icons:IconList,private apiData:FetchData) {
    }
    searchText:any;
    public bookingObject: IBooking[] = [];
    public todaysBookings: any[] = [];
    currentDateTime = new Date();
    isOpen = false;
    disabled = false;
    passed = false;

    get bookings() {
        return this.bookingObject;
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }

    createListOfCurretDate() {
        this.todaysBookings.push(this.bookingObject.find(item => item.timeStart >= this.currentDateTime));
        console.log(this.currentDateTime.toLocaleDateString('sv-SV', { day: '2-digit', month: '2-digit', year: 'numeric' ,hour:'2-digit',minute:'2-digit'}))
    }
    updateTime()
    {
        setInterval(() => {
            this.currentDateTime = new Date();
        }, 1000);
    }
    ngOnInit(): void {
        this.updateTime(); 
        this.apiData.getBookingData().subscribe(data => {
            this.bookingObject = data;
        })
        this.createListOfCurretDate();

    }    
}
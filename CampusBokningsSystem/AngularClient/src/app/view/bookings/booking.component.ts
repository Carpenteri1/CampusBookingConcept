import {Component, OnInit} from '@angular/core';
import { IconList } from '../../services/search/iconsList.service';
import { TestData } from '../../services/testdata.service';
import { ITestDataModel } from '../../shared/ITestDataModel';
import { FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FetchData } from '../../services/models/Bookings';
import { IRooms } from '../../services/models/Rooms';

@Component({
    selector: 'Booking-component',
    templateUrl: 'booking.component.html',
    styleUrls: []
})
export default class BookingView implements OnInit{
    icons: IconList = new IconList();
    public roomObjects: IRooms[] = [];
    public seatingList: number[] = [];
    seatsAvailable: any;



    public bookingForm = this.formBuilder.group({
        dateStart: '',
        dateEnd: '',
        className:'',
        seatsBooked: '',
        roomName: '',
        roomId: '',
        user:'',
    });

    /*
     *IRoom
    Id: number;
    roomName: string;
    location: string;
    seating: number;
    typeOfRoom: RoomType;
    equipment?: string;
    description?: string;
    rating?: Set<Rating>;*/




    /*
     * IBooking
    id: number;
    dateStart: Date;
    dateEnd: Date;
    timeStart?: string;
    timeEnd?: string;
    className?: string;
    seatsBooked?: number;
    room: IRooms;
    user: number;*/
    constructor(private formBuilder: FormBuilder, public assets: IconList,public apiData:FetchData) {
        this.icons.assets = assets.assets;
    }
    onSubmit() {

        console.log("submitted and name is " + this.bookingForm.value.roomName + " seatsbooked " + this.bookingForm.value.seatsBooked)
        this.bookingForm.reset();
        /*
        this.data
            .postData()
            .subscribe(() => console.log(JSON.stringify(status)));
            */
    }
    modo() {

        this.seatsAvailable = this.roomObjects.find(item => item.roomName == this.bookingForm.value.roomName)?.seating;
        this.seatingList = [];//reset seating list
        console.log("list is clear and length is now "  + this.seatingList.length)

        for (let i = 0; i < Number(this.seatsAvailable); i++) {
            this.seatingList[i] = i;
        }
        //for testing only
        console.log("Seats available " + this.seatsAvailable + " seat list lengt " + this.seatingList.length)
    }
    ngOnInit(): void {
        this.apiData.getRoomData().subscribe(data => {
            this.roomObjects = data;
        })
    }

}
import {Component, OnInit} from '@angular/core';
import { IconList } from '../../services/data/iconsList.service';
import { FormBuilder } from '@angular/forms';
import { IRooms } from '../../services/models/IRooms';
import { FetchData } from '../../services/data/fetchData';

@Component({
    selector: 'Booking-component',
    templateUrl: 'booking.component.html',
    styleUrls: []
})
export default class BookingView implements OnInit{
    public roomObjects: IRooms[] = [];
    public seatingList: number[] = [];
    seatsAvailable: any;


    constructor(private formBuilder: FormBuilder, public icons: IconList, private apiData: FetchData) {

    }


    public bookingForm = this.formBuilder.group({
        dateStart:'',
        timeStart: '',
        timeEnd: '',
        className:'',
        seatsBooked: '',
        roomName: '',
        roomId: '',
        user: '',
        password:'',
        userId:'',
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

        for (let i = 0; i <= Number(this.seatsAvailable); i++) {
            this.seatingList[i] = i;
        }




        //for testing only
        console.log("Seats available " + this.seatsAvailable)
    }
    ngOnInit(): void {
        this.apiData.getRoomData().subscribe(data => {
            this.roomObjects = data;
        })
    }

}
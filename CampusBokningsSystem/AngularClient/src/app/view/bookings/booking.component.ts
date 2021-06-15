import {Component, OnInit} from '@angular/core';
import { IconList } from '../../services/data/iconsList.service';
import { FormBuilder } from '@angular/forms';
import { IRooms } from '../../services/models/IRooms';
import { apiConnection } from '../../services/data/apiConnection.service';
import { IBooking } from '../../services/models/IBookings';
@Component({
    selector: 'Booking-component',
    templateUrl: 'booking.component.html',
    styleUrls: []
})
export default class BookingView implements OnInit{
    public roomObjects: IRooms[] = [];
    public seatingList: number[] = [];
    private newBooking = {} as IBooking;
    seatsAvailable: any;


    constructor(private formBuilder: FormBuilder,
        public icons: IconList,
        private apiData: apiConnection) {

    }

    public bookingForm = this.formBuilder.group({
        dateStart:'',
        timeStart: '',
        timeEnd: '',
        className:'',
        seatsBooked: '',
        roomName: '',
        user: '',
        password:'',
    });

    async onSubmit(data: any) {
        let dateStart = `${data.dateStart}T${data.timeStart}`;
        let dateEnd = `${data.dateStart}T${data.timeEnd}`;
        this.newBooking =
        {
            timeStart: new Date(dateStart),
            timeEnd: new Date(dateEnd),
            className: String(data.className),
            seatsBooked: Number(data.seatsBooked),
            room: {
                roomName: data.roomName,
                
            },
            user: {
                userName: data.user,
            }
        }
        this.apiData.postBookingData(this.newBooking);
        this.bookingForm.reset();
    }
    modo() {

        this.seatsAvailable = this.roomObjects.find(item => item.roomName == this.bookingForm.value.roomName)?.seating;
        this.seatingList = [];//reset seating list

        for (let i = 0; i <= Number(this.seatsAvailable); i++) {
            this.seatingList[i] = i;
        }
    }
    async ngOnInit(): Promise<void> {
        (await this.apiData.getRoomData()).subscribe(data => {
            this.roomObjects = data;
        })

    }

}
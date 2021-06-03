import { Time } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IRooms, Rooms } from "./Rooms";
import { Users } from "./Users";

@Injectable()
export class Bookings {
    
 
    /* fetchData() : Observable<any[]>{
        return this.http.get<any[]>(this.apiUrl)
            .pipe(map(getData => {
                return getData;
            }));

    }*/

}
@Injectable()
export class FetchData
{
    private readonly bookingAPIGet = "https://localhost:44355/api/Bookings";
    private readonly roomAPIGet = "https://localhost:44355/api/Rooms";

    constructor(private http: HttpClient) {
    }
    getBookingData(): Observable<IBooking[]> {
        return this.http.get<IBooking[]>(this.bookingAPIGet);
    }
    getRoomData(): Observable<IRooms[]> {
        return this.http.get<IRooms[]>(this.roomAPIGet);
    }
    getRoomDataById(value: number) : Observable<IRooms> {
        return this.http.get<IRooms>(this.roomAPIGet +"/"+value.toString());
    }
    getBookingDataById(value: number): Observable<IBooking> {
        return this.http.get<IBooking>(this.bookingAPIGet + "/" + value.toString());
    }
}

export interface IBooking {
    id: number;
    dateStart: Date;
    dateEnd: Date;
    timeStart?: string;
    timeEnd?: string;
    className?: string;
    seatsBooked?: number;
    room: IRooms;
    user: number;
}


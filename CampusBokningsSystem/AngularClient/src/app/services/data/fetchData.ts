import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IBooking } from "../models/IBookings";
import { IComments } from "../models/IComments";
import { IRooms } from "../models/IRooms";

@Injectable()
export class FetchData {
    private readonly bookingAPIGet = "https://localhost:44355/api/Bookings";
    private readonly roomAPIGet = "https://localhost:44355/api/Rooms";
    private readonly commentsAPIGet = "https://localhost:44355/api/Comments"

    constructor(private http: HttpClient) {
    }
    getBookingData(): Observable<IBooking[]> {
        return this.http.get<IBooking[]>(this.bookingAPIGet);
    }
    getBookingDataById(value: number): Observable<IBooking> {
        return this.http.get<IBooking>(this.bookingAPIGet + "/" + value.toString());
    }

    getRoomData(): Observable<IRooms[]> {
        return this.http.get<IRooms[]>(this.roomAPIGet);
    }
    getRoomDataById(value: number): Observable<IRooms> {
        return this.http.get<IRooms>(this.roomAPIGet + "/" + value.toString());
    }
 
    getCommentDataById(value: number): Observable<IComments> {
        return this.http.get<IComments>(this.commentsAPIGet + "/" + value.toString());
    }
    getCommentData() : Observable<IComments[]> {
        return this.http.get<IComments[]>(this.commentsAPIGet);
    }
}

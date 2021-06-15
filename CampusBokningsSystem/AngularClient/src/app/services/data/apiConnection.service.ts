import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { IBooking } from "../models/IBookings";
import { IComments } from "../models/IComments";
import { IRooms } from "../models/IRooms";
import { IUsers } from "../models/IUsers";

@Injectable()
export class apiConnection {
    private readonly bookingAPIGet = "https://localhost:44355/api/Bookings";
    private readonly roomAPIGet = "https://localhost:44355/api/Rooms";
    private readonly commentsAPIGet = "https://localhost:44355/api/comments"
    private readonly userAPIGet = "https://localhost:44355/api/Users"
 
    httpHeader = {
        headers: new HttpHeaders({
            'content-type': 'application/json'
        })
    }

    constructor(private http: HttpClient,
    private router:Router) {
    }
    async getBookingData(): Promise<Observable<IBooking[]>> {
        return await this.http.get<IBooking[]>(this.bookingAPIGet);
    }
    async getBookingDataById(value: number): Promise<Observable<IBooking>> {
        return await this.http.get<IBooking>(this.bookingAPIGet + `/id=${value}`);
    }

     postBookingData(bookingData: IBooking): void {
        const headers = { 'content-type': 'application/json' }
         this.http.post<IBooking>(this.bookingAPIGet, bookingData, { 'headers': headers , observe: 'response' }).subscribe(value => {
             if (value.ok) {
                 this.router.navigate(['/']);
             }
         });
    }
    async getRoomData(): Promise<Observable<IRooms[]>> {
        return await this.http.get<IRooms[]>(this.roomAPIGet);
    }
    async getRoomDataById(value: number): Promise<Observable<IRooms>> {
        return await this.http.get<IRooms>(this.roomAPIGet + `/id=${value}`);
    }
    async getRoomDataByName(value: string): Promise<Observable<IRooms>>
    {
        return this.http.get<IRooms>(this.roomAPIGet +`/name=${value}`);
    }


    postComment(comments: IComments, roomId:string): void
    {
       let currentUrl = this.router.url;
        const headers = { 'content-type': 'application/json' }
        this.http.post<IComments>(this.commentsAPIGet + `/${roomId}`, JSON.stringify(comments), { "headers": headers, observe: 'response' }).subscribe(value => {
            if (value.ok) {
                console.log("response ok!");
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigate([currentUrl]);
                });
            } else {
                console.log("response error! " + value.status + " status text " + value.statusText);
            }

        });
    }

    updateCommentRating(comment:IComments) {
        let currentUrl = this.router.url;
        const headers = { 'content-type': 'application/json' }
        this.http.put<IComments>(this.commentsAPIGet,JSON.stringify(comment), { "headers": headers, observe: 'response' }).subscribe(value => {
            if (value.ok) {
                console.log("response ok!");/*
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigate([currentUrl]);
                });*/
            } else {
                console.log("response error! " + value.status + " status text " + value.statusText);
            }
        });
    }

    async getCommentDataById(value: number): Promise<Observable<IComments>> {
        return await this.http.get<IComments>(this.commentsAPIGet + "/" + value.toString());
    }
    async getCommentData(): Promise<Observable<IComments[]>> {
        return await this.http.get<IComments[]>(this.commentsAPIGet);
    }
    async getUserData(): Promise<Observable<IUsers>>{
        return await this.http.get<IUsers>(this.userAPIGet);
    }
    async getUserDataByName(value: string): Promise<Observable<IUsers>> {
        return await this.http.get<IUsers>(this.userAPIGet + `/name=${value}`);
    }
}

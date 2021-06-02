import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RoomType } from "../enums/RoomType";
import { Bookings } from "./Bookings";
import { Rating } from "./Ratings";

@Injectable()
export class Rooms implements IRooms{
    Id: number = 0;
    roomName: string = "";
    location: string = "";
    seating: number = 0;
    typeOfRoom: RoomType = RoomType.datorsal;
    equipment?: string | undefined;
    description?: string | undefined;
    rating?: Set<Rating> | undefined; 
    /*
    public readonly apiUrl = "https://localhost:44355/api/Rooms";
    constructor() {
    }
    Id: number = 0;
    roomName: string = "";
    location: string = "";
    seating: number = 0;
    typeOfRoom: RoomType = RoomType.datorsal;
    equipment?: string | undefined;
    description?: string | undefined;
    rating?: Set<Rating> | undefined;
    public dataArray: Rooms[] = [];
    fetchData(): Observable<void> {
        return this.http.get<[]>(this.apiUrl)
            .pipe(map(getData => {
                this.dataArray = getData;
                return;
            }));
    }*/
}

export interface IRooms {
    Id: number;
    roomName: string;
    location: string;
    seating: number;
    typeOfRoom: RoomType;
    equipment?: string;
    description?: string;
    rating?: Set<Rating>;
}


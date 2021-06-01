import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RoomType } from "../enums/RoomType";
import { Bookings } from "./Bookings";
import { Rating } from "./Ratings";

@Injectable()
export class Rooms {
    constructor(private http: HttpClient) {
    }
    public readonly apiUrl = "https://localhost:44355/api/Rooms";
    Id: number | undefined;
    roomName: string | undefined;
    location: string | undefined;
    seating: number | undefined;
    typeOfRoom: RoomType | undefined;
    equipment?: string | undefined;
    description?: string | undefined;
    booking?: Set<Bookings>;
    rating?: Set<Rating>;


    public dataArray: any[] = [];
    fetchData(): Observable<void> {
        return this.http.get<[]>(this.apiUrl)
            .pipe(map(getData => {
                this.dataArray = getData;
                return;
            }));
    }
}


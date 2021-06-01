import { Time } from "@angular/common";
import { Observable } from "rxjs";
import { Rooms } from "./Rooms";
import { Users } from "./Users";

export class Bookings {
    private readonly apiUrl = "https://localhost:44355/api/TestData";
    Id: number | undefined;
    Date: Date | undefined;
    className?: string;
    seatsBooked?: number;
    timeStart: Time | undefined;
    timeEnd: Time | undefined;
    rooms: Rooms| undefined;
    user: Users | undefined;
    /*
    public dataArray: any [] = [];
    http: any;
    fetchData(): Observable<void> {
        return this.http.get<[]>(this.apiUrl)
            .pipe(map(getData => {
                this.dataArray = getData;
                return;
            }));
    }*/

}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable()
export class TestData {
    private readonly apiUrl = "https://localhost:44355/api/TestData";
    constructor(private http: HttpClient)
    {

    }
    public dataArray : any = [];
    fetchData() {
        return this.http.get<[]>(this.apiUrl)
            .pipe(map(getData => {
                this.dataArray = getData;
                return this.dataArray;
            }));
    }

    /*public data = [
        {
            className: "sut-19",
            timeStart: new Date(2021, 2, 22, 18, 30, 0).getHours() + ":" + new Date(2021, 2, 22, 18, 30, 0).getMinutes(),
            timeEnd: new Date(2021, 2, 22, 20, 0, 0).getHours() + ":" + new Date(2021, 2, 22, 20, 0, 0).getMinutes(),
            info: "Redovisning",
            location: "B-hus",
            room: "B-202"
        },
        {
            className: "sut-20",
            timeStart: new Date(2021, 2, 23, 15, 0, 0).getHours() + ":" + new Date(2021, 2, 23, 15, 0, 0).getMinutes(),
            timeEnd: new Date(2021, 2, 23, 17, 0, 0).getHours() + ":" + new Date(2021, 2, 23, 17, 0, 0).getMinutes(),
            info: "Mjukvaruutveckling",
            location: "C-hus",
            room: "c-356"
        },
        {
            className: "sut-18",
            timeStart: new Date(2021, 2, 25, 11, 0, 0).getHours() + ":" + new Date(2021, 2, 25, 11, 0, 0).getMinutes(),
            timeEnd: new Date(2021, 2, 25, 14, 0, 0).getHours() + ":" + new Date(2021, 2, 25, 14, 0, 0).getMinutes(),
            info: "studiebesök",
            location: "A-hus",
            room: "A-101"
        }
    ];*/
}
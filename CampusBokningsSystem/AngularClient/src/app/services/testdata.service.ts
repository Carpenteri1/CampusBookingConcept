import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ITestDataModel } from "../shared/ITestDataModel";

@Injectable()
export class TestData {
    private readonly apiUrl = "https://localhost:44355/api/TestData";
    constructor(private http: HttpClient)
    {

    }
    public dataArray: ITestDataModel[] = [];
    fetchData() : Observable<void> {
        return this.http.get<[]>(this.apiUrl)
            .pipe(map(getData => {
                this.dataArray = getData;
                return;
            }));
    }
}
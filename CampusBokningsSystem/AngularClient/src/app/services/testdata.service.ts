import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ITestDataModel } from "../shared/ITestDataModel";

@Injectable()
export class TestData implements ITestDataModel{
    private readonly apiUrl = "https://localhost:44355/api/TestData";
    constructor(private http: HttpClient)
    {
    }
   
    id: number = 0;
    className: string ="";
    timeStart: string = "";
    timeEnd: string ="";
    info: string ="";
    location: string= "";
    room: string =""; 


    public dataArray: ITestDataModel[] = [];
    fetchData() : Observable<void> {
        return this.http.get<[]>(this.apiUrl)
            .pipe(map(getData => {
                this.dataArray = getData;
                return;
            }));
    }
    
    postData(data:ITestDataModel){
        return this.http.post(this.apiUrl, data);
            
    }
}
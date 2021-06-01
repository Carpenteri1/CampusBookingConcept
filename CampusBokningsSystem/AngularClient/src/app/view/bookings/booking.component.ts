import {Component, OnInit} from '@angular/core';
import { IconList } from '../../services/search/iconsList.service';
import { TestData } from '../../services/testdata.service';
import { ITestDataModel } from '../../shared/ITestDataModel';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
    selector: 'Booking-component',
    templateUrl: 'booking.component.html',
    styleUrls: []
})
export default class BookingView{

    constructor(public data: TestData) {

    }

    name:string ="";

    
    onSubmit() {

        console.log("submitted and name is " + name)
        /*
        this.data
            .postData()
            .subscribe(() => console.log(JSON.stringify(status)));;*/
    }

}
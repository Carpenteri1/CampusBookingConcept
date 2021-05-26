import { Component } from '@angular/core';

@Component({
    selector: 'search-component',
    templateUrl: './search.component.html',
    styleUrls: []
})
export class SearchComponent {

    time =
    {
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        sec: new Date().getSeconds()
    }


    private _listFilter: string = '';
    currentDate = new Date().toLocaleDateString();
    currentTime = new Date().toLocaleTimeString();
    showMoreInfo: boolean = false;
    showAdvancedSearch: boolean = false;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filterData = this.PerformFilter(value);
    }
    //make a class 
    filterData: ITestData[] = [];

    testData: ITestData[] = [
        {
            class: "sut-19",
            dateTime: new Date(2021, 2, 22, 18, 30, 0),
            info: "Redovisning",
            location: "B-hus",
            room:"B-202"
        },
        {
            class: "sut-20",
            dateTime: new Date(2021, 2, 23, 15, 0, 0),
            info: "Mjukvaruutveckling",
            location: "C-hus",
            room:"c-356"
        },
        {
            class: "sut-18",
            dateTime: new Date(2021, 2, 25, 11, 0, 0),
            info: "studiebesök",
            location: "A-hus",
            room :"A-101"
        }
    ];

    testdataLenght = this.testData.length;

    icons = {
        downArrow: "AngularClient/assets/Files/Icons/arrow-down-sign-to-navigate.png",
        calendar: "AngularClient/assets/Files/Icons/calendar.png",
        clock: "AngularClient/assets/Files/Icons/clock.png",
        home: "AngularClient/assets/Files/Icons/home.png",
        info_button: "AngularClient/assets/Files/Icons/info-button.png",
        nextArrow: "AngularClient/assets/Files/Icons/next.png",
        pin: "AngularClient/assets/Files/Icons/pin.png",
        previousArrow: "AngularClient/assets/Files/Icons/previous.png",
        students_cap: "AngularClient/assets/Files/Icons/students-cap.png",
        time: "AngularClient/assets/Files/Icons/time.png",
        campusIcon: "AngularClient/assets/Files/Icons/campus_liggande_svart_trans.png"
    }

   ///Methods
    PerformFilter(filterBy: string): ITestData[]
    {
        filterBy = filterBy.toLocaleLowerCase();
        return this.testData.filter((data: ITestData) =>
        data.class.toLocaleLowerCase().includes(filterBy));
    }

    toggleAvancedSearch(): void {
        this.showAdvancedSearch = !this.showAdvancedSearch;
    }
    toggleShowMoreInfo(): void {
        this.showMoreInfo = !this.showMoreInfo;
    }

    ngOnInit(): void {
        this.listFilter = '';
        this.updateTime();
    }

    updateTime()
    {
        setInterval(() => { 
            this.time.sec = new Date().getSeconds();
            this.time.minutes = new Date().getMinutes();
            this.time.hours = new Date().getHours();
        }, 1000);
    }

}

interface ITestData {
    class: string;
    dateTime: Date;
    info: string;
    location: string;
    room: string;
}
import { Component } from '@angular/core';

@Component({
    selector: 'search-component',
    templateUrl: './search.component.html',
    styles: []
})
export class SearchComponent {
    pageTitle = 'SearchComponent';
    icons = {
        downArrow: "AngulerClient/assets/Files/Icons/arrow-down-sign-to-navigate.png",
        calendar: "AngulerClient/assets/Files/Icons/calendar.png",
        clock: "AngulerClient/assets/Files/Icons/clock.png",
        home: "AngulerClient/assets/Files/Icons/home.png",
        info_button: "AngulerClient/assets/Files/Icons/info-button.png",
        nextArrow: "AngulerClient/assets/Files/Icons/next.png",
        pin: "AngulerClient/assets/Files/Icons/pin.png",
        previousArrow: "AngulerClient/assets/Files/Icons/previous.png",
        students_cap: "AngulerClient/assets/Files/Icons/students-cap.png",
        time: "AngulerClient/assets/Files/Icons/time.png",
        campusIcon: "AngulerClient/assets/Files/Icons/campus_liggande_svart_trans.png"
    }
}

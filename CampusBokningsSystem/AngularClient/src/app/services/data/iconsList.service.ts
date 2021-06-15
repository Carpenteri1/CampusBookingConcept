import { Injectable } from "@angular/core";

@Injectable()
export class IconList {
    private readonly localhost: string = "https://localhost:44345/";
    public assets = {
        downArrow: this.localhost+"AngularClient/assets/Files/Icons/arrow-down-sign-to-navigate.png",
        calendar: this.localhost +"AngularClient/assets/Files/Icons/calendar.png",
        clock: this.localhost +"AngularClient/assets/Files/Icons/clock.png",
        home: this.localhost +"AngularClient/assets/Files/Icons/home.png",
        info_button: this.localhost +"AngularClient/assets/Files/Icons/info-button.png",
        nextArrow: this.localhost +"AngularClient/assets/Files/Icons/next.png",
        pin: this.localhost +"AngularClient/assets/Files/Icons/pin.png",
        previousArrow: this.localhost +"AngularClient/assets/Files/Icons/previous.png",
        students_cap: this.localhost +"AngularClient/assets/Files/Icons/students-cap.png",
        time: this.localhost +"AngularClient/assets/Files/Icons/time.png",
        campusIcon: this.localhost + "AngularClient/assets/Files/Icons/campus_liggande_svart_trans.png",
        armchair: this.localhost + "AngularClient/assets/Files/Icons/armchair.png"
    }
}
import { IRooms } from "./IRooms";
import { IUsers } from "./IUsers";

export interface IBooking {
    id?: number;
    timeStart: Date;
    timeEnd: Date;
    className?: string;
    seatsBooked?: number;
    room?: IRooms;
    user?: IUsers;
}


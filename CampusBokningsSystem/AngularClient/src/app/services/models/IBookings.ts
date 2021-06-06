import { IRooms } from "./IRooms";

export interface IBooking {
    id: number;
    timeStart: Date;
    timeEnd: Date;
    className?: string;
    seatsBooked?: number;
    room: IRooms;
    user: number;
}


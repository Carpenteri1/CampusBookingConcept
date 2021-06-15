import { RoomType } from "../enums/RoomType";
import { IComments } from "./IComments";

export interface IRooms {
    id?: number;
    roomName?: string;
    location?: string;
    seating?: number;
    typeOfRoom?: RoomType;
    equipment?: string;
    description?: string;
    comments?: Set<IComments>;
}


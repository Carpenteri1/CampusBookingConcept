import { Bookings } from "./Bookings";
import { Rating } from "./Ratings";
import { TypeOfAccount } from "../enums/TypeOfAccount";

export class Users {
    Id: number | undefined;
    userName: string | undefined;
    password: string | undefined;
    typeOfAccount: TypeOfAccount | undefined;
}
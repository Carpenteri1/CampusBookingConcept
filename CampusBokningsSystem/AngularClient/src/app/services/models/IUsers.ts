import { TypeOfAccount } from "../enums/TypeOfAccount";
import { IComments } from "./IComments";

export interface IUsers {
    id?: number;
    userName?: string;
    password?: string;
    typeOfAccount?: TypeOfAccount;
    comment?: Set<IComments>;
}
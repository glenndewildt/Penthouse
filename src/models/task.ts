import {User} from "./user";

export class Task{
    id: number;
    name: string;
    description: string;
    isDone: boolean;
    begin_date: string;
    end_date: string;
    user: User;


}
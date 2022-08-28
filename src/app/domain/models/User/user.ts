import { UserRegistered } from "./userregistered";

export class User {
    name!: String;
    documentType!: String;
    document!: String;
    email!: String;
    password!: String;
    phone!: String;
    role!: number;    
}

export class userResponse{
    user!: UserRegistered;
}

export class userResponseLogin{
    _id!: string;
    name!: string;
    email!: string;
    rol!: number;   
    token!: string;
}
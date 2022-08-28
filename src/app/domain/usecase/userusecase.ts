import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserGateway } from "../models/User/gateway/user-gateway";
import { User, userResponse, userResponseLogin } from "../models/User/user";

@Injectable({
    providedIn: 'root'
})

export class UserUseCase{
    constructor(private _userGateway : UserGateway){}

    signup(user: User): Observable<String>{
        //TODO implementacion de la logica de negocio
        return this._userGateway.signup(user);
    }
    login(email: any, password: any): Observable<userResponseLogin>{
        //TODO implementacion de la logica de negocio
        return this._userGateway.login(email, password);
    }
    forgetPassword(email: any): Observable<String>{
        //TODO implementacion de la logica de negocio
        return this._userGateway.forgetPassword(email);
    }
}
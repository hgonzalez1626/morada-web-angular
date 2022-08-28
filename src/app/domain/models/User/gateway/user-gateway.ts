import { Observable } from "rxjs";
import { Property, propertyResponse } from "../../Property/property";
import { User, userResponse, userResponseLogin } from "../user";


export abstract class UserGateway{
    abstract signup(user: User) : Observable<String>
    abstract login(email: any, password: any) : Observable<userResponseLogin>
    abstract forgetPassword(email: any) : Observable<String>
    abstract register(property: Property) : Observable<propertyResponse>
}
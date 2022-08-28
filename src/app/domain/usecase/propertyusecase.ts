import { Token } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PropertyGateway } from "../models/Property/gateway/property-gateway";
import { PropertiesResponse, Property, propertyResponse, propertyResponsebyId, propertyResponseUpload } from "../models/Property/property";
import { propertyRegistered } from "../models/Property/propertyregistered";
import { UserGateway } from "../models/User/gateway/user-gateway";

@Injectable({
    providedIn: 'root'
})


export class PropertyUseCase {
    constructor(private _propertyGateway : PropertyGateway){}

    getProperties() : Observable<propertyRegistered[]> {
        //TODO implementacion de la logica de negocio
        return this._propertyGateway.getProperties();
    }
    getPropertyDetail( id:string) : Observable<propertyResponsebyId> {
        //TODO implementacion de la logica de negocio
        return this._propertyGateway.getPropertyDetail(id);
    }
    createProperty( property:Property) : Observable<propertyResponse> {
        //TODO implementacion de la logica de negocio
        return this._propertyGateway.createProperty(property);
    }
    /*
    uploadImage(mainImage: any): Observable<propertyResponseUpload>{
        //TODO implementacion de la logica de negocio
        return this._propertyGateway.uploadImage(mainImage);
    }
    */
}

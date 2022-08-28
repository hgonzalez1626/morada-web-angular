import { Observable } from "rxjs";
import { PropertiesResponse, Property, propertyResponse, propertyResponsebyId, propertyResponseUpload } from "../property";
import { propertyRegistered } from "../propertyregistered";

export abstract class PropertyGateway{    
    //abstract register(property: Property) : Observable<propertyResponse>
    abstract getProperties() : Observable<propertyRegistered[]>;
    abstract getPropertyDetail(id : string) : Observable<propertyResponsebyId>;
    abstract createProperty(property : Property) : Observable<propertyResponse>;
    //abstract uploadImage(mainImage: any) : Observable<propertyResponseUpload>        
}
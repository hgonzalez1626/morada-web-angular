import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyGateway } from 'src/app/domain/models/Property/gateway/property-gateway';
import { PropertiesResponse, Property, propertyResponse, propertyResponsebyId } from 'src/app/domain/models/Property/property';
import { propertyRegistered } from 'src/app/domain/models/Property/propertyregistered';
import { GenericService } from 'src/app/infraestructure/helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class MoradapropertyApiService extends PropertyGateway {

  private token = localStorage.getItem('token');
  
  private _url = 'http://localhost:3001'
  constructor(private genericService : GenericService) { super();}

  getProperties(): Observable<propertyRegistered[]> {
      return this.genericService.get<PropertiesResponse>(this._url,'properties',undefined)
   
  }
  getPropertyDetail(id: string): Observable<propertyResponsebyId>  {

    return this.genericService.get<propertyResponse>(this._url,'properties',id)
  
  }
  createProperty(property: Property): Observable<propertyResponse> {

    return this.genericService.post<propertyResponse>(this._url,'properties',property)
   
  }
}

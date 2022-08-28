import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyGateway } from 'src/app/domain/models/Property/gateway/property-gateway';
import { Property, propertyResponse, propertyResponseUpload } from 'src/app/domain/models/Property/property';
import { UserGateway } from 'src/app/domain/models/User/gateway/user-gateway';
import { User, userResponse, userResponseLogin } from 'src/app/domain/models/User/user';
import { GenericService } from 'src/app/infraestructure/helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class MoradaApiService extends UserGateway{
  private _url='http://localhost:3001'
  private headers_object = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token')); 
  
  //private headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  constructor(private genericService : GenericService) {    
    super();    
  }

  signup(user: User): Observable<String>{
    return this.genericService.post<User>(this._url,'users/signup', user)
  }
  login(email: any, password: any): Observable<userResponseLogin>{
    return this.genericService.post<any>(this._url,'users/login', {email: email, password: password})
  }
  forgetPassword(email: any): Observable<String>{
    return this.genericService.post<User>(this._url,'users/login/forgetPassword', {email: email})
  }
  register(property: Property): Observable<propertyResponse> {
    return this.genericService.post(this._url,'properties', property)
  }
}

import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { propertyResponse, propertyResponsebyId } from 'src/app/domain/models/Property/property';
import { propertyRegistered } from 'src/app/domain/models/Property/propertyregistered';
import { PropertyUseCase } from 'src/app/domain/usecase/propertyusecase';

@Component({
  selector: 'app-propertydetail',
  templateUrl: './propertydetail.component.html',
  styleUrls: ['./propertydetail.component.css']
})
export class PropertydetailComponent implements OnInit {

  constructor(private _propertyUseCase: PropertyUseCase, private router: ActivatedRoute) { }
  response: any;
  property!: propertyResponsebyId;
  ngOnInit(): void {
    this.router.queryParamMap.subscribe((params)=>{
      var propertyId = params.get('id');
      if(propertyId){
        this.response = this._propertyUseCase.getPropertyDetail(propertyId)
        this.response.subscribe(
          (data: propertyResponsebyId)=>{
            if(data){
              //console.log(data.city)
              this.property = data
              //const {propiedad} = this.property
              //console.log({propiedad: this.property})
              console.log(this.property.shortDescription)
            }             
          }
        )
      }
    })
  }

}

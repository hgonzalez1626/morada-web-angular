import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { propertyRegistered } from 'src/app/domain/models/Property/propertyregistered';
import { PropertyUseCase } from 'src/app/domain/usecase/propertyusecase';
import Swal from 'sweetalert2';
import { Property, propertyResponsebyId } from "src/app/domain/models/Property/property";

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  addpropertyForm!: FormGroup;
  response: any;
  property!: propertyResponsebyId;
  textImage: string = '1661477285487.jpg';
  ownerId: String = '62b756b4b866a70d5d04fa21';
  Ok: number = 1

  constructor(private _propertyUseCase: PropertyUseCase,
    private formBuilder: FormBuilder,
    private router: Router) { }

  public validationMessages = {

    title: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    city: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    zone: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    propertyType: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    value: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    bussinessType: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    shortDescription: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    description: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    mainImage: [
      { type: 'required', message: 'Este campo es requerido' },
    ]
  };

  ngOnInit(): void {

    this.addpropertyForm = this.formBuilder.group({
      title: ['',
        [
          Validators.required,
        ]
      ],
      city: ['',
        [
          Validators.required,
        ]
      ],
      zone: ['',
        [
          Validators.required,
        ]
      ],
      propertyType: ['',
        [
          Validators.required,
        ]
      ],
      value: ['',
        [
          Validators.required,
        ]
      ],
      bussinessType: ['',
        [
          Validators.required,
        ]
      ],
      shortDescription: ['',
        [
          Validators.required,
        ]
      ],
      description: ['',
        [
          Validators.required,
        ]
      ],
      mainImage: ['',
        [
          Validators.required,
        ]
      ]
    })
  }

  public get f() {
    return this.addpropertyForm.controls
  }

  register() {
    console.log(this.addpropertyForm.valid)
    if (this.addpropertyForm.valid) {

      var property: Property = {        
        title: this.addpropertyForm.controls['title'].value,
        city: this.addpropertyForm.controls['city'].value,
        zone: this.addpropertyForm.controls['zone'].value,
        propertyType: this.addpropertyForm.controls['propertyType'].value,
        bussinessType: this.addpropertyForm.controls['bussinessType'].value,
        mainImage: this.textImage,
        ownerId: this.ownerId,
        value: this.addpropertyForm.controls['value'].value,
        shortDescription: this.addpropertyForm.controls['shortDescription'].value,
        description: this.addpropertyForm.controls['description'].value,
        status: 1
      } 

      this.response = this._propertyUseCase.createProperty(property)
      this.response.subscribe(
        (data: propertyResponsebyId) => {
          if (data) {
            this.property = data
           // console.log(this.property.shortDescription)
            Swal.fire({
              title: 'Propiedad Creada',
              text: '"'+ this.property.title +'"' + ' '+  'Creada con exito',
              icon: 'success',
              confirmButtonText: 'Ok'
            });
            this.goToDetails(this.property._id);            
          } else {
            Swal.fire({
              title: 'Propiedad no Creada',
              text: 'fallo',
              icon: 'error',
              confirmButtonText: 'bad'
            });
          }
        }
      )
    }
  }
  goToDetails(id: String){
    //console.log(id)
    this.router.navigate(['default/detailproperty'],{queryParams:{id}})
  }
}

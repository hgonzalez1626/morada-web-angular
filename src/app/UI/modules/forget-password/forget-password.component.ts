import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserUseCase } from 'src/app/domain/usecase/userusecase';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm! : FormGroup;
  formValid : Boolean = false;
  response: any;

  public validationMessages = {
    email: [
      {type: 'required', message: 'Este campo es requerido'},
      {type: 'pattern', message: 'Solo se permiten emails'}
    ]
  };

  constructor( private _userUseCase: UserUseCase,
    private formBuilder: FormBuilder, 
    private router: Router) { }

    ngOnInit(): void {
      this.forgetPasswordForm = this.formBuilder.group({
        email :['',
          [
            Validators.required,
            Validators.email,
            Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
          ]
        ]
      })
    }

    public get f() {
      return this.forgetPasswordForm.controls
    }

    fireSuccessSwal(title: string, text: string, icon: string, confirmButton: string) {
      switch (icon) {
        case 'success':
          Swal.fire({
            title: title,
            text: text,
            icon: 'success',
            confirmButtonText: confirmButton
          });
          break;
        case 'error':
          Swal.fire({
            title: title,
            text: text,
            icon: 'error',
            confirmButtonText: confirmButton
          });
          break;
        default:
          break;
      }
    }

    forgetPassword(){
      if (this.forgetPasswordForm.valid) {
        var email = this.forgetPasswordForm.controls['email'].value;        
        //Mockup de servicio de login
        this.response = this._userUseCase.forgetPassword(email)
        this.response.subscribe(
          (data: any) => {
            if (data) {
  
              Swal.fire({
                title: 'Revisa tu Email',
                text: data,
                icon: 'success',
                confirmButtonText: 'Ok'
              });
              this.router.navigate(['full/login']);
            } else {
              Swal.fire({
                title: 'Usuario no existe',
                text: 'fallo',
                icon: 'error',
                confirmButtonText: 'bad'
              });
            }
          }
        )
      }
    }
  }
  
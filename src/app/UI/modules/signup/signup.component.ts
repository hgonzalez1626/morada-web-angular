import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/models/User/user';
import { UserRegistered } from 'src/app/domain/models/User/userregistered';
import { UserUseCase } from 'src/app/domain/usecase/userusecase';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  response: any;
  user!: UserRegistered;
  constructor(private _userUseCase: UserUseCase,
    private formBuilder: FormBuilder,
    private router: Router) { }

  public validationMessages = {
    name: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    documentType: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    document: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    phone: [
      { type: 'required', message: 'Este campo es requerido' },
    ],
    email: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'pattern', message: 'Solo se permiten emails' }
    ],
    password: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'minlength', message: 'Este campo debe tener minimo 8 caracteres' }
    ]
  };

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
        ]
      ],
      documentType: ['',
        [
          Validators.required,
        ]
      ],
      document: ['',
        [
          Validators.required,
        ]
      ],
      phone: ['',
        [
          Validators.required,
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    })
  }

  public get f() {
    return this.signupForm.controls
  }

  signup() {
    if (this.signupForm.valid) {
      var user: User = {
        email: this.signupForm.controls['email'].value,
        password: this.signupForm.controls['password'].value,
        name: this.signupForm.controls['name'].value,
        documentType: this.signupForm.controls['documentType'].value,
        document: this.signupForm.controls['document'].value,
        phone: this.signupForm.controls['phone'].value,
        role: 1
      }
      this.response = this._userUseCase.signup(user)
      this.response.subscribe(
        (data: any) => {
          if (data) {

            Swal.fire({
              title: 'Usuario Creado',
              text: data,
              icon: 'success',
              confirmButtonText: 'Ok'
            });
            this.router.navigate(['full/login']);
          } else {
            Swal.fire({
              title: 'Usuario no Creado',
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

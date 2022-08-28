import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './UI/layouts/default/default.component';
import { FullwidthComponent } from './UI/layouts/fullwidth/fullwidth.component';
import { AddPropertyComponent } from './UI/modules/add-property/add-property.component';
import { ContactComponent } from './UI/modules/contact/contact.component';
import { ForgetPasswordComponent } from './UI/modules/forget-password/forget-password.component';
import { HomeComponent } from './UI/modules/home/home.component';
import { LoginComponent } from './UI/modules/login/login.component';
import { PropertydetailComponent } from './UI/modules/propertydetail/propertydetail.component';
import { SignupComponent } from './UI/modules/signup/signup.component';
import { AuthGuard } from './UI/shared/guard/auth.guard';


const routes: Routes = [ 
  {path: '', redirectTo:'full/login', pathMatch:'full'},
  {path: 'default', component:DefaultComponent,
    canActivate: [AuthGuard],
    children:[{
      path: 'home',
      component: HomeComponent
    },
    {
      path:'contact',
      component: ContactComponent
    },
    {
      path:'addproperty',
      component: AddPropertyComponent
    },
    {
      path:'detailproperty',
      component: PropertydetailComponent
    }]
  },

  {path: 'full', component:FullwidthComponent,
    children:[{
      path: 'login',
      component: LoginComponent
    },    
    {
      path: 'signup',
      component: SignupComponent
    },    
    {
      path: 'forgetpassword',
      component: ForgetPasswordComponent
    }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

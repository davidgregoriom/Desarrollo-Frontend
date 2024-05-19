import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


export const AUTH_ROUTES: Routes = [
   {
      path: 'Login',
      component: LoginComponent,
   },{
      path: 'Register',
      component: RegisterComponent,
   },{
      path: 'ForgotPassword',
      component: ForgotpasswordComponent,
   }
];

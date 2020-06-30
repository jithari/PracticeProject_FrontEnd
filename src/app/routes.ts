import { Routes } from '@angular/router';
import { SignInComponent} from './sign-in/sign-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    { path: '',redirectTo: '/login', pathMatch:'full'},
     
    { path: 'login',component:SignInComponent },
   
    { path: 'homepage', component: HomePageComponent,canActivate:[AuthGuard]},
   
];
import { Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HrConsultantsComponent } from './hr-consultants/hr-consultants.component';
import { SmallBusinessComponent } from './small-business/small-business.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {   path: '',   component: HomePageComponent  },
    { path: 'features', component: FeaturesComponent },
    { path: 'hrconsultants', component: HrConsultantsComponent },
     { path: 'smallbusiness', component: SmallBusinessComponent },
     { path: 'contactus', component: ContactUsComponent },
      { path: 'login', component: LoginComponent },
];

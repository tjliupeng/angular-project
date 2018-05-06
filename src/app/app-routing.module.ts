import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserComponent } from './user/user.component';
import { DicomSearchComponent } from './dicom/dicom-search/dicom-search.component';

const routes: Routes = [
//  {
//        path: 'signup', component: UserComponent,
//        children: [{ path: '', component: SignupComponent }]
//    },
//    {
//        path: 'login', component: UserComponent,
//        children: [{ path: '', component: SigninComponent }]
//    },
//    {
//        path: 'signup', component: UserComponent,
//        children: [{ path: '', component: SignupComponent }]
//    },
    {
        path: 'login', component: SigninComponent
    },
    {
        path: 'signup', component: SignupComponent
    },
    {
        path: 'dicoms', component: DicomSearchComponent
    },
    {
        path : '', redirectTo: '/login', pathMatch : 'full'
    }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

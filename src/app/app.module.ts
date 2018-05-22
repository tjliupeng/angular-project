import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// For the browser refresh
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTreeModule } from '@angular/material/tree';
import { CdkTreeModule } from '@angular/cdk/tree';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// mat-icon svg
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
// third party
// import { ImageCropperComponent } from 'ng2-img-cropper';
import { MatDatetimepickerModule, MatNativeDatetimeModule, MAT_DATETIME_FORMATS } from '@mat-datetimepicker/core';
// import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './user/auth.guard';
import { UserService } from './user/user.service';
import { AppsettingsService } from './appsettings.service';
import { DicomSearchComponent } from './dicom/dicom-search/dicom-search.component';
import { DicomSearchService } from './dicom/dicom-search/dicom-search.service';
import { AuthInterceptorService } from './interceptor/auth-interceptor.service';
import { UrlInterceptorService } from './interceptor/url-interceptor.service';
import {PopMessageComponent} from './pop-message/pop-message.component';
import { AddTagsComponent } from './dicom/add-tags/add-tags.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserComponent,
    PopMessageComponent,
    DicomSearchComponent,
    AddTagsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatListModule,
    MatCheckboxModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptorService,
      multi: true,
    },
    UserService, AppsettingsService, AuthGuard, DicomSearchService],
    entryComponents: [
      PopMessageComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

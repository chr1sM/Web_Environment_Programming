import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthInterceptor } from './interceptors/auth-interceptor.interceptor';
//angular materials
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserMylocalsComponent } from './components/user-mylocals/user-mylocals.component';
import { UserEditLocalComponent } from './components/user-edit-local/user-edit-local.component';
import { UserCreateLocalComponent } from './components/user-create-local/user-create-local.component';
import { LocalMenuComponent } from './components/local-menu/local-menu.component';
import { UserViewMylocalsComponent } from './components/user-view-mylocals/user-view-mylocals.component';
import { UserLocalsComponent } from './components/user-locals/user-locals.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminCreateComponent } from './components/admin-create/admin-create.component';
import { AdminLocalsComponent } from './components/admin-locals/admin-locals.component';
import { AdminViewLocalsComponent } from './components/admin-view-locals/admin-view-locals.component';
import { AdminViewUsersComponent } from './components/admin-view-users/admin-view-users.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminAdminsComponent } from './components/admin-admins/admin-admins.component';
import { AdminViewAdminsComponent } from './components/admin-view-admins/admin-view-admins.component';
import { UserViewLocalsComponent } from './components/user-view-locals/user-view-locals.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    UserMenuComponent,
    AdminMenuComponent,
    UserHomeComponent,
    UserMylocalsComponent,
    UserEditLocalComponent,
    UserCreateLocalComponent,
    LocalMenuComponent,
    UserViewMylocalsComponent,
    UserLocalsComponent,
    AdminProfileComponent,
    AdminCreateComponent,
    AdminLocalsComponent,
    AdminViewLocalsComponent,
    AdminViewUsersComponent,
    AdminUsersComponent,
    AdminAdminsComponent,
    AdminViewAdminsComponent,
    UserViewLocalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

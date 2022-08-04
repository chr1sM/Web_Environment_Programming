import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Token
import { TokenUserGuard } from './guards/token-user.guard';
import { TokenAdminGuard } from './guards/token-admin.guard';
//Login
import { LoginComponent } from './components/login/login.component';
//Register
import { RegisterComponent } from './components/register/register.component';
//User
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserCreateLocalComponent } from './components/user-create-local/user-create-local.component';
import { UserMylocalsComponent } from './components/user-mylocals/user-mylocals.component';
import { UserLocalsComponent } from './components/user-locals/user-locals.component';
import { UserViewMylocalsComponent } from './components/user-view-mylocals/user-view-mylocals.component';

//Admin
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminCreateComponent } from './components/admin-create/admin-create.component';
import { AdminLocalsComponent } from './components/admin-locals/admin-locals.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminAdminsComponent } from './components/admin-admins/admin-admins.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'user', component: UserHomeComponent, canActivate: [TokenUserGuard]
  },
  {
    path: 'user/profile', component: UserProfileComponent, canActivate: [TokenUserGuard]
  },
  {
    path: 'user/local', component: UserLocalsComponent, canActivate: [TokenUserGuard]
  },
  {
    path: 'user/localCreate', component: UserCreateLocalComponent, canActivate: [TokenUserGuard]
  },
  {
    path: 'user/myLocals', component: UserMylocalsComponent, canActivate: [TokenUserGuard]
  },
  {
    path: 'user/locaDetails/:id', component: UserViewMylocalsComponent, canActivate: [TokenUserGuard]
  },
  {
    path: 'admin', component: AdminMenuComponent, canActivate: [TokenAdminGuard]
  },
  {
    path: 'admin/profile', component: AdminProfileComponent, canActivate: [TokenAdminGuard]
  },
  {
    path: 'admin/createAdmin', component: AdminCreateComponent, canActivate: [TokenAdminGuard]
  },
  {
    path: 'admin/local', component: AdminLocalsComponent, canActivate: [TokenAdminGuard]
  },
  {
    path: 'admin/users', component: AdminUsersComponent, canActivate: [TokenAdminGuard]
  },
  {
    path: 'admin/admins', component: AdminAdminsComponent, canActivate: [TokenAdminGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

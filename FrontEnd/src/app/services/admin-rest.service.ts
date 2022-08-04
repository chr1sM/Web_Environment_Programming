import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//Models
import { User } from '../models/user';
import { Local } from '../models/local';
import { Admin } from '../models/admin';

const endpoint = 'http://localhost:3000/admin/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})

export class AdminRestService {

  constructor(private http: HttpClient) { }

  profile(): Observable<Admin> {
    return this.http.get<Admin>(endpoint + 'profile');
  }
  editProfile(editedAdmin: Admin): Observable<Admin> {
    return this.http.put<Admin>(endpoint + 'profile', JSON.stringify(editedAdmin), httpOptions);
  }
  createAdmin(name: string, password: string, permission: number): Observable<Admin> {
    return this.http.post<Admin>(endpoint + 'createAdmin', new AdminModel(name, password, permission))
  }

  //User
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(endpoint + 'users');
  }
  getUser(id: string): Observable<User> {
    return this.http.get<User>(endpoint + 'users/' + id);
  }
  deleteUsers(id: string): Observable<User> {
    return this.http.delete<User>(endpoint + 'users/' + id);
  }
  editUser(id: string, editedUser: Local): Observable<User> {
    return this.http.put<User>(endpoint + 'user/' + id, JSON.stringify(editedUser), httpOptions);
  }

  //Local
  getLocals(): Observable<Local[]> {
    return this.http.get<Local[]>(endpoint + 'locals');
  }
  getLocal(id: string): Observable<Local> {
    return this.http.get<Local>(endpoint + 'showLocal/' + id);
  }
  deleteLocal(id: string): Observable<Local> {
    return this.http.delete<Local>(endpoint + 'local/' + id);
  }
  editLocal(id: string, editedLocal: Local): Observable<Local> {
    return this.http.put<Local>(endpoint + 'local/' + id, JSON.stringify(editedLocal), httpOptions);
  }

  //Admin
  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(endpoint + 'admins');
  }
  getAdmin(id: string): Observable<Admin> {
    return this.http.get<Admin>(endpoint + 'admins/' + id);
  }
  deleteAdmins(id: string): Observable<Admin> {
    return this.http.delete<Admin>(endpoint + 'admins/' + id);
  }
  editAdmin(id: string, editedAdmin: Admin): Observable<Admin> {
    return this.http.put<Admin>(endpoint + 'admin/' + id, JSON.stringify(editedAdmin), httpOptions);
  }
}

export class AdminModel {

  constructor(public email: string, public password: string, public permission: number) { }

}
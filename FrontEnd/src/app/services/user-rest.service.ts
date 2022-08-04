import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//Models
import { User } from '../models/user';
import { Local } from '../models/local';

const endpoint = 'http://localhost:3000/user/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserRestService {

  constructor(private http: HttpClient) { }
  profile(): Observable<User> {
    return this.http.get<User>(endpoint + 'profile');
  }
  editProfile(editedUser: User): Observable<User> {
    return this.http.put<User>(endpoint + 'profile', JSON.stringify(editedUser), httpOptions);
  }
  getLocals(): Observable<Local[]> {
    return this.http.get<Local[]>(endpoint + 'locals');
  }
  getLocal(id: string): Observable<Local> {
    return this.http.get<Local>(endpoint + 'showLocal/' + id);
  }
  getMyLocals(): Observable<Local[]> {
    return this.http.get<Local[]>(endpoint + 'myLocals');
  }
  editLocal(id: string, editedLocal: Local): Observable<Local> {
    return this.http.put<Local>(endpoint + 'local/' + id, JSON.stringify(editedLocal), httpOptions);
  }
  deleteLocal(id: string): Observable<Local> {
    return this.http.delete<Local>(endpoint + 'local/' + id, httpOptions);
  }
  createLocal(name: string, local: string, category: string, desciption: string): Observable<Local> {
    return this.http.post<Local>(endpoint + 'local', new LocalModel(name, local, category, desciption))
  }
}

export class LocalModel {

  constructor(public name: string, public local: string, public category: string, public desciption: string) { }

}


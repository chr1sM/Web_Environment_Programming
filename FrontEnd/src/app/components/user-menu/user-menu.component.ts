import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestService } from '../../services/auth-rest.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(private router: Router, private authServive: AuthRestService) { }
  ngOnInit(): void {
  }

  home(): void {
    this.router.navigate(['/user']);
  }

  local(): void {
    this.router.navigate(['/user/local']);
  }

  mylocals(): void {
    this.router.navigate(['/user/myLocals']);
  }

  profile(): void {
    this.router.navigate(['/user/profile']);
  }
  
  logout():void{
    localStorage.removeItem("cPerson")
    this.router.navigate(['/login']);
  }
}

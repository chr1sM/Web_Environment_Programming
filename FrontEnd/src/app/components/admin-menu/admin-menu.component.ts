import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestService } from '../../services/auth-rest.service';


@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  constructor(private router: Router, private authServive: AuthRestService) { }
  ngOnInit(): void {
  }

  home(): void {
    this.router.navigate(['/admin']);
  }

  locals(): void {
    this.router.navigate(['/admin/local']);
  }

  users(): void {
    this.router.navigate(['/admin/users']);
  }

  createAdmin(): void {
    this.router.navigate(['/admin/createAdmin']);
  }

  showAdmins(): void {
    this.router.navigate(['/admin/admins']);
  }

  profile(): void {
    this.router.navigate(['/admin/profile']);
  }
  
  logout():void{
    localStorage.removeItem("cPerson")
    this.router.navigate(['/login']);
  }

}

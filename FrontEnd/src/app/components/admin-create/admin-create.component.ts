import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminRestService } from 'src/app/services/admin-rest.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {
  email: string;
  password: string;
  permission: number;

  constructor(private router: Router, private authService: AdminRestService) {
    this.email = "";
    this.password = "";
    this.permission = 1;
  }

  ngOnInit(): void {
  }

  createAdmin(): void {
    this.authService.createAdmin(this.email, this.password, this.permission).subscribe((person: any) => {
      if (person.email != undefined) {
        alert("Admin has been Created!")
        this.router.navigate(['/admin']);
      } else {
        alert("Email is being used!")
        this.router.navigate(['/admin/adminCreate']);
      }
    })
  }
}

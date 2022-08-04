import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../../models/admin';
import { AdminRestService } from '../../services/admin-rest.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  admin:Admin;
  constructor(private router: Router, private route: ActivatedRoute, private rest:AdminRestService) { }

  ngOnInit(): void {
    this.rest.profile().subscribe((data : Admin)=>{
      this.admin = data;
    })
  }
  
  updateProfile(admin) {
    this.rest.editProfile(admin).subscribe(data => { alert("Succesfully Update password") }, Error => { alert("Failed while updating password") });
    this.router.navigate(['/admin/profile']);
  }
}

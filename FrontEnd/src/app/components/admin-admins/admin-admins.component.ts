import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRestService } from 'src/app/services/admin-rest.service';
import { AdminViewAdminsComponent } from '../admin-view-admins/admin-view-admins.component';

import { Admin } from '../../models/admin';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-admin-admins',
  templateUrl: './admin-admins.component.html',
  styleUrls: ['./admin-admins.component.css']
})
export class AdminAdminsComponent implements OnInit {

  admin:Admin;
  admins:Admin[];
  
  constructor(public dialog: MatDialog,private rest:AdminRestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins() {
    this.rest.getAdmins().subscribe((data: Admin[]) => {
      this.admins = data;
    });
  }

  deleteAdmin(id: string) {
    this.rest.deleteAdmins(id)
      .subscribe(_ => {
        this.getAdmins();
      }, (err) => {
        console.log(err);
      }
      );
  }

  openDialog(id: string) {
    this.rest.getAdmin(id).subscribe((data: Admin) => {
      this.admin = data;
    });

    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    wait(1 * 250).then(() => {
      let dialogRef = this.dialog.open(AdminViewAdminsComponent, { data: this.admin })

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.rest.editAdmin(result._id, result).subscribe(data => { alert("Succesfully Update Admin") }, Error => { alert("failed while updating order") });
        }
        console.log('The dialog was closed');
      });
    })

  }
}

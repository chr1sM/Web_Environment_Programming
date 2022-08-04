import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRestService } from 'src/app/services/admin-rest.service';
import { AdminViewUsersComponent } from '../admin-view-users/admin-view-users.component';

import { User } from '../../models/user';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  user:User;
  users:User[];
  
  constructor(public dialog: MatDialog,private rest:AdminRestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.rest.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  deleteUser(id: string) {
    this.rest.deleteUsers(id)
      .subscribe(_ => {
        this.getUsers();
      }, (err) => {
        console.log(err);
      }
      );
  }

  openDialog(id: string) {
    this.rest.getUser(id).subscribe((data: User) => {
      this.user = data;
    });

    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    wait(1 * 250).then(() => {
      let dialogRef = this.dialog.open(AdminViewUsersComponent, { data: this.user })

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.rest.editUser(result._id, result).subscribe(data => { alert("Succesfully Update User") }, Error => { alert("failed while updating order") });
        }
        console.log('The dialog was closed');
      });
    })

  }
}

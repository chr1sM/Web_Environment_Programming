import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRestService } from 'src/app/services/user-rest.service';
import { UserViewLocalsComponent } from '../user-view-locals/user-view-locals.component';

import { Local } from '../../models/local';

import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-user-locals',
  templateUrl: './user-locals.component.html',
  styleUrls: ['./user-locals.component.css']
})
export class UserLocalsComponent implements OnInit {
  local:Local;
  locals:Local[]
  constructor(public dialog: MatDialog,private rest:UserRestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getLocals();
  }

  getLocals() {
    this.rest.getLocals().subscribe((data: Local[]) => {
      this.locals = data;
    });
  }

  openDialog(id: string) {
    this.rest.getLocal(id).subscribe((data: Local) => {
      this.local = data;
    });

    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    wait(1 * 250).then(() => {
      let dialogRef = this.dialog.open(UserViewLocalsComponent, { data: this.local })

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.rest.editLocal(result._id, result).subscribe(data => { alert("Succesfully Update Local") }, Error => { alert("failed while updating order") });
        }
        console.log('The dialog was closed');
      });
    })

  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRestService } from 'src/app/services/user-rest.service';
import { UserViewMylocalsComponent } from '../user-view-mylocals/user-view-mylocals.component';

import { MatDialog } from '@angular/material/dialog';

import { Local } from '../../models/local';

@Component({
  selector: 'app-user-mylocals',
  templateUrl: './user-mylocals.component.html',
  styleUrls: ['./user-mylocals.component.css']
})

export class UserMylocalsComponent implements OnInit {
  locals: Local[];
  local: Local;
  constructor(public dialog: MatDialog, private rest: UserRestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getMyLocals();
  }

  getMyLocals() {
    this.rest.getMyLocals().subscribe((data: Local[]) => {
      this.locals = data;
    });
  }

  deleteLocal(id: string) {
    this.rest.deleteLocal(id)
      .subscribe(_ => {
        this.getMyLocals();
      }, (err) => {
        console.log(err);
      }
      );
  }

  getLocal(id:string) {
    this.router.navigate(['/user/localDetails/'+id]);
  }

  openDialog(id: string) {
    this.rest.getLocal(id).subscribe((data: Local) => {
      this.local = data;
    });

    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    wait(1 * 250).then(() => {
      let dialogRef = this.dialog.open(UserViewMylocalsComponent, { data: this.local })

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.rest.editLocal(result._id, result).subscribe(data => { alert("Succesfully Update Event") }, Error => { alert("failed while updating order") });
        }
        console.log('The dialog was closed');
      });
    })

  }

}

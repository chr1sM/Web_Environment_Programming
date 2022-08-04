import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRestService } from 'src/app/services/admin-rest.service';
import { AdminViewLocalsComponent } from '../admin-view-locals/admin-view-locals.component';

import { Local } from '../../models/local';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-admin-locals',
  templateUrl: './admin-locals.component.html',
  styleUrls: ['./admin-locals.component.css']
})
export class AdminLocalsComponent implements OnInit {

  local:Local;
  locals:Local[]
  constructor(public dialog: MatDialog,private rest:AdminRestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getLocals();
  }

  getLocals() {
    this.rest.getLocals().subscribe((data: Local[]) => {
      this.locals = data;
    });
  }

  deleteLocal(id: string) {
    this.rest.deleteLocal(id)
      .subscribe(_ => {
        this.getLocals();
      }, (err) => {
        console.log(err);
      }
      );
  }

  openDialog(id: string) {
    this.rest.getLocal(id).subscribe((data: Local) => {
      this.local = data;
    });

    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    wait(1 * 250).then(() => {
      let dialogRef = this.dialog.open(AdminViewLocalsComponent, { data: this.local })

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.rest.editLocal(result._id, result).subscribe(data => { alert("Succesfully Update Local") }, Error => { alert("failed while updating order") });
        }
        console.log('The dialog was closed');
      });
    })

  }
}

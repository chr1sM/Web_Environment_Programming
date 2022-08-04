import { Component, Input, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Admin } from '../../models/admin';

@Component({
  selector: 'app-admin-view-admins',
  templateUrl: './admin-view-admins.component.html',
  styleUrls: ['./admin-view-admins.component.css']
})
export class AdminViewAdminsComponent implements OnInit {
  @Input() admin: Admin;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
  }

}

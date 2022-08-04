import { Component, Input, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Local } from '../../models/local';

@Component({
  selector: 'app-user-view-mylocals',
  templateUrl: './user-view-mylocals.component.html',
  styleUrls: ['./user-view-mylocals.component.css']
})

export class UserViewMylocalsComponent implements OnInit {
  @Input() local: Local;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}

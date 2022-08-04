import { Component, Input, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Local } from '../../models/local';

@Component({
  selector: 'app-user-view-locals',
  templateUrl: './user-view-locals.component.html',
  styleUrls: ['./user-view-locals.component.css']
})
export class UserViewLocalsComponent implements OnInit {
  @Input() local: Local;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}

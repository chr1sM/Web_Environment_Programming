import { Component, Input, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Local } from '../../models/local';

@Component({
  selector: 'app-admin-view-locals',
  templateUrl: './admin-view-locals.component.html',
  styleUrls: ['./admin-view-locals.component.css']
})
export class AdminViewLocalsComponent implements OnInit {
  @Input() local: Local;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}

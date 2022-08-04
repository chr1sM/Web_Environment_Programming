import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestService } from 'src/app/services/auth-rest.service';

@Component({
  selector: 'app-local-menu',
  templateUrl: './local-menu.component.html',
  styleUrls: ['./local-menu.component.css']
})
export class LocalMenuComponent implements OnInit {

  constructor(private router: Router, private authServive: AuthRestService) { }

  ngOnInit(): void {
  }
  home(): void {
    this.router.navigate(['/user']);
  }
  local(): void {
    this.router.navigate(['/user/localCreate']);
  }
  locals(): void {
    this.router.navigate(['/user/local']);
  }
  logout():void{
    localStorage.removeItem("cPerson")
    this.router.navigate(['/login']);
  }

}

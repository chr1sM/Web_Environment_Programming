import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRestService } from 'src/app/services/user-rest.service';

@Component({
  selector: 'app-user-create-local',
  templateUrl: './user-create-local.component.html',
  styleUrls: ['./user-create-local.component.css']
})
export class UserCreateLocalComponent implements OnInit {

  name: string;
  local:string;
  category: string;
  desciption: string;
  likes: number;
  dislikes: number;
  user_id: string

 constructor(private router: Router, private userService: UserRestService) {

    this.name= ""
    this.local=""
    this.category= ""
    this.desciption= ""
    this.likes = 0
    this.dislikes = 0
    this.user_id =""
   
  }

  ngOnInit(): void {
  }

  createLocal() {
    this.userService.createLocal(this.name,this.local,this.category,this.desciption).subscribe((local: any) => {
      if (local.name != undefined) {
        alert("Create with success ");
        window.location.reload();
      } else {
        alert("Local can not be created")
        this.router.navigate(['/local/create']);
      }
    })
  }
}

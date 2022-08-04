import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Local } from '../../models/local';
import { UserRestService } from 'src/app/services/user-rest.service';

@Component({
  selector: 'app-user-edit-local',
  templateUrl: './user-edit-local.component.html',
  styleUrls: ['./user-edit-local.component.css']
})
export class UserEditLocalComponent implements OnInit {
  local:Local
  constructor(private rest:UserRestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var idTemp = this.route.snapshot.params['id'];
    this.rest.getLocal(idTemp).subscribe((data : Local)=>{
      this.local = data;
    })
  }
  
  updateEvent() {
    
    this.rest.editLocal(this.local._id , this.local ).subscribe(data => { alert("Succesfully Update order") }, Error => { alert("failed while updating order") });
    this.router.navigate(['/user/myLocals']);
  }

}

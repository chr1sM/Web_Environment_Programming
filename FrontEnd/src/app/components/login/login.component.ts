import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestService } from '../../services/auth-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router, private authServive: AuthRestService) {
    this.email = "";
    this.password = "";

  }

  ngOnInit(): void {
  }

  login(): void {
    this.authServive.login(this.email, this.password).subscribe((person: any) => {
      if (person && person.token) {
        localStorage.setItem('cPerson', JSON.stringify(person));
        switch (person.permission) {
          case 1: this.router.navigate(['/admin']);
            break;
          case 2: this.router.navigate(['/user']);
            break;
          default:
            this.router.navigate(['/login']);
        }
      } else {
        alert('Erro no login!');
      }
    })
  }
  register(): void {
    this.router.navigate(['/register']);
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.login();
    }
  }

}


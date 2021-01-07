import { Component, OnInit } from '@angular/core';
import { loginReq } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: loginReq = { username: 'luismanueldiaz1@gmail.com', password: '123456789'};

  constructor(
    private authService : AuthService,
  ) { }

  ngOnInit(): void {
    this.login();
  }

  login(){
    this.authService.login(this.userLogin).subscribe(
      user =>  console.log('login')
    );
  }

}

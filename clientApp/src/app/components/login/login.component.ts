import { Component, OnInit } from '@angular/core';
import { loginReq } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // loginForm = this.formBuilder.group({
  //   username: [''],
  //   password: [''],
  // });

  userLogin: loginReq = { username: '', password: ''};

  constructor(
    private authService : AuthService,
    private formBuilder: FormBuilder,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.authService.login(this.userLogin).subscribe(
      (res) => {
        if(res){
          this.router.navigate(['/home']);
        }
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    'email':['', [Validators.required, Validators.email]],
    'password':['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb: FormBuilder, private auth: AuthService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    const credentials = this.loginForm.value;
    this.auth.login(credentials)
      .subscribe(
        (user)=>{
          this.snack.open(`Logged in successfuly. Welcome ${user.firstName}!`, 'OK', {duration:3000})
          this.router.navigateByUrl('/')
        },
        err=>{
          console.log(err);
          this.snack.open(`Error Login`, 'OK', {duration:3000})
        }
      )
  }

}

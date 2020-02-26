import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from '../../user';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister = this.fb.group({
    'firstName': ['', Validators.required],
    'lastname': ['', Validators.required],
    'city': ['', Validators.required],
    'state': ['', Validators.required],
    'phone': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]],
    'password1': ['', [Validators.required, Validators.minLength(6)]],
    'password2': ['', [Validators.required, Validators.minLength(6)]]
  }, {validator: this.matchingPasswords});

  states = ['PE', 'MG', 'RJ', 'PB', 'RN', 'AM']

  constructor(private fb: FormBuilder, 
    private auth: AuthService,
    private snack: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
  }

  matchingPasswords(group: FormGroup) {
    if(group){
      const ps1 = group.controls['password1'].value;
      const ps2 = group.controls['password2'].value;
      if(ps1 == ps2) return null
    }
    return {matching: false}
  }

  onSubmit(){
    let u: User = {...this.formRegister.value, password: this.formRegister.value.password1};
    this.auth.register(u)
      .subscribe((u)=>{
        this.snack.open('Sucesso! Use suas credenciais para logar', 'OK', {duration:3000} )
        this.router.navigateByUrl('/auth/login')
      }),
      (err)=>{
        console.log(err);
        this.snack.open(err.error.message, 'OK', {duration:3000} )
      }
  }

}

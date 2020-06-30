import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { LogService } from '../shared/log.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers:[LogService]
})
export class SignInComponent implements OnInit {
  loginForm:FormGroup;
  submitted = false;
 

constructor(private FormBuilder: FormBuilder, private _logingService: LogService,private router:Router){}

serverErrorMessages: boolean;

ngOnInit(){
  this.loginForm = this.FormBuilder.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.minLength(3)]]
  }); 
}

get form() { 
  return this.loginForm.controls; 
}

onSubmit() {
    this.submitted = true;
    //console.log(this.loginForm.value);
    this._logingService.login(this.loginForm.value)
    .subscribe(
      res => {
        this._logingService.setToken(res['token']);
       this.router.navigateByUrl('/homepage');
      },
      error => this.serverErrorMessages = true
    );

}

}


//123@gmail.com pd:123
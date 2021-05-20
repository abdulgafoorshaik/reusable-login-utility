import { Component, Input, OnInit,  EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-reusable-login-utility',
  templateUrl: "./template.html",
  styleUrls: ["./styles.css"]
})
export class ReusableLoginUtilityComponent implements OnInit {

  constructor() { }

  @Input() signUpForm : boolean;
  @Output() getUserInfo : EventEmitter<any> = new EventEmitter();
  public userForm : FormGroup;

  ngOnInit(): void {
    this.loadLoginForm();
  }
  
  loadLoginForm(){
      this.userForm = new FormGroup({
        username: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required)
      })
    }

    sendLoginDetails(){
      this.getUserInfo.emit(this.userForm.value)
    }

  get Controls(){
   return  this.userForm.controls;
  }
}

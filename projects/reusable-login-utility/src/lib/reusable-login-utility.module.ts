import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReusableLoginUtilityComponent } from './reusable-login-utility.component';
import { CommonModule } from '@angular/common';  




@NgModule({
  declarations: [ReusableLoginUtilityComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [ReusableLoginUtilityComponent]
})
export class ReusableLoginUtilityModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-login';

  userInfo : any;

  getUserInfo(info){
    this.userInfo = info;
  }
}

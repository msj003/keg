import { Component, OnInit } from '@angular/core';
import { UserModel } from './userModel';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = new UserModel;

  constructor() {
   }



  ngOnInit() {
    this.user.firstName = "Manjinder";
  }

}

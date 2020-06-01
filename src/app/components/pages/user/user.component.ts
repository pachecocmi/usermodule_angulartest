import { Component, OnInit } from '@angular/core';

import { UserModel } from '../../../models/UserModel';
import { UserService } from '../../../services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:UserModel = {};
  userList:UserModel[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.userList = users['data'];
    });
  }

  catchEmit(params:any) {
    console.log(params);
    switch(params.method) {
      case "deleteUser":
        this.userList = this.userList.filter(user => user.id !== params.value);
        this.userService.deleteUser(params.value).subscribe();
        break;
      case "saveUser": 
          console.log(params.value);
        break;
      case "showUser": 
          this.userList.forEach(user=>{
            if( params.value == user.id )
              this.user = user;
          });
        break;
      case "clearUser": 
        if( params.value == 0 ) this.user = {};
        else  {
          this.userList.forEach(user=>{
            if( params.value == user.id )
              console.log(user);
            // this.user = user;
          });
        }
        break;
    }
    // database calls here
  }

}

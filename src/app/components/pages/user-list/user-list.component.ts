import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user-service.service';
import { UserModel } from '../../../models/UserModel';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList:UserModel[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.userList = users['data'];
    });
  }

}

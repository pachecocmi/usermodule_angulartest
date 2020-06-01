import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from '../../../models/UserModel';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() userList:UserModel[];
  @Output() listEmit = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  btnEvent(action:string, userID:number) {
    this.listEmit.emit({
      method: action,
      value: userID
    });
  }

  // deleteUser(userId:number) {
  //   this.listEmit.emit({
  //     method: "deleteUser",
  //     value: userId
  //   });
  // }

  // showUser(userId:number) {
  //   this.listEmit.emit({
  //     method: "showUser",
  //     value: userId
  //   });
  // }

}

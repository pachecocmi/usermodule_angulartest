import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user:UserModel = { id:0 };
  @Output() formEmit = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    // console.log(this.user, this.userSet);
  }

  submitUser() {
    this.formEmit.emit({
      method: "saveUser",
      value: this.user
    });
  }

  clearForm() {
    console.log(this.user.id);
    // this.user = { id:0 };
    this.formEmit.emit({
      method: "clearUser",
      value: this.user.id ?? 0
    });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userAdded = false;

  constructor() { }

  ngOnInit(): void {
  }

  public createUser() {
    this.userAdded = !this.userAdded;
  }
}

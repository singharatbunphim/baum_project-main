import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/user';
import { UserApiComponent } from '../user-api/user-api.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {

  // ใช้งาน users coponent โดย import เข้ามา
  @ViewChild("usersApi") usersApi: UserApiComponent;

  usersList : User[];
  
  constructor(router: Router) {
   
   }

  async ngOnInit() {

  }

  ngAfterViewInit() {
    // child is set
    this.usersApi.loadUsers().then(() => {
      this.usersList = this.usersApi.usersList;
    });
  }

}

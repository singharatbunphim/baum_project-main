import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiComponent } from '../user-api/user-api.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit, AfterViewInit {

  subRoute : any;
  uid: any;
  userResult: any;
  
  // ใช้งาน users coponent โดย import เข้ามา
  @ViewChild("usersApi") usersApi: UserApiComponent;
  
  constructor(private routeLink: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // get :uid from path
    this.subRoute = this.route.params.subscribe( (params:any) => {
      this.uid = params.uid;
    });

  }

  ngAfterViewInit() {
    // child is set
    this.usersApi.getUser(this.uid).then(() => {
      this.userResult = this.usersApi.user;
    });
  }



}
